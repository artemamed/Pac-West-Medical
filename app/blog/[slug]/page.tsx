import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/app/sanity/client";
import Image from "next/image";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import { notFound } from "next/navigation";
import type { Metadata } from "next";


// Define types for Sanity block content
interface SanityBlock {
  _type: string;
  children?: Array<{
    text: string;
    _type?: string;
    marks?: string[];
  }>;
  [key: string]: unknown; // Use 'unknown' instead of 'any' for safety
}


interface SanityCategory {
  _id: string;
  title: string;
}

interface SanityAuthor {
  name: string;
  image?: SanityImageSource;
  bio?: SanityBlock[]; // Sanity uses block content
}

interface SanityPost extends SanityDocument {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  body?: SanityBlock[];
  image?: SanityImageSource;
  author?: SanityAuthor;
  categories?: SanityCategory[];
}

interface RecommendedPost {
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: SanityImageSource;
  excerpt?: string;
  categories?: SanityCategory[];
}

// Define your Sanity queries and fetch logic
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  ...,
  author->,
  categories[]->
}`;
const RECOMMENDED_POSTS_QUERY = `*[_type == "post" && defined(slug.current) && slug.current != $slug]|order(publishedAt desc)[0...4]{
  title,
  slug,
  publishedAt,
  image,
  excerpt,
  categories[]->{title}
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };


type Params = Promise<{ slug: string }>;

// Update the generateMetadata function
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityPost>(POST_QUERY, { slug });

  if (!post) {
    return {
      title: "Post not found",
      description: "The post you're looking for doesn't exist",
    };
  }

  const description =
    post.excerpt ||
    (post.body && Array.isArray(post.body)
      ? `${post.body.find((block: SanityBlock) => block._type === 'block')?.children?.[0]?.text?.slice(0, 150)}...`
      : "Explore our latest blog post on surgical instruments.");

  return {
    title: `${post.title} | Blog`,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.image ? [urlFor(post.image)?.width(1200).height(630).url() || ''] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name || [],
    },
  };
}

// Update the default export function
export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await client.fetch<SanityPost>(POST_QUERY, { slug });

  if (!post) {
    return notFound();
  }



  const postImageUrl = post.image
    ? urlFor(post.image)?.width(800).height(450).url()
    : null;

  const authorImageUrl = post.author?.image
    ? urlFor(post.author.image)?.width(100).height(100).url()
    : null;

  const allPosts = await client.fetch<RecommendedPost[]>(RECOMMENDED_POSTS_QUERY, { slug: (await params).slug }, options);

  return (
    <LayoutWrapper className="min-h-screen py-12">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to all posts
        </Link>

        {/* Article header */}
        <header className="mb-12">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category: SanityCategory) => (
                <span
                  key={category._id}
                  className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <div>
              <div className="flex items-center gap-2 text-sm">
                <FaCalendarAlt />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>

          {postImageUrl && (
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src={postImageUrl}
                alt={post.title}
                className="w-full aspect-video object-cover"
                width={800}
                height={450}
                priority
              />
            </div>
          )}
        </header>

        {/* Article content */}
        <div className="prose prose-lg max-w-none mx-auto">
          {Array.isArray(post.body) && (
            <PortableText
              value={post.body}
              components={{
                types: {
                  image: ({ value }: { value: { asset: SanityImageSource; alt?: string; caption?: string } }) => (
                    <div className="my-8 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={urlFor(value)?.width(800).height(600).url() || ''}
                        alt={value.alt || 'Post image'}
                        width={800}
                        height={600}
                        className="w-full object-cover"
                      />
                      {value.caption && (
                        <p className="text-center text-sm text-gray-500 mt-2">
                          {value.caption}
                        </p>
                      )}
                    </div>
                  ),
                },
                block: {
                  normal: ({ children }) => (
                    <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h4>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-teal-500 italic pl-6 py-2 my-6 bg-gray-100 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                },
                marks: {
                  link: ({ value, children }) => {
                    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
                    return (
                      <a
                        href={value?.href}
                        target={target}
                        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="text-teal-600 hover:text-teal-800 underline transition-colors"
                      >
                        {children}
                      </a>
                    );
                  },
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                  underline: ({ children }) => (
                    <u className="underline">{children}</u>
                  ),
                  code: ({ children }) => (
                    <code className="font-mono bg-gray-200 px-1.5 py-0.5 rounded text-sm">
                      {children}
                    </code>
                  ),
                },
              }}
            />
          )}
        </div>

        {/* Author bio */}
        {post.author && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {authorImageUrl && (
                <Image
                  src={authorImageUrl}
                  alt={post.author.name}
                  width={120}
                  height={120}
                  className="rounded-full flex-shrink-0"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  About {post.author.name}
                </h3>
                {post.author.bio && (
                  <div className="prose text-gray-700">
                    <PortableText value={post.author.bio} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </article>

      {/* Recommended Blog Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          You might also like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allPosts.map((recommendedPost) => (
            <article
              key={recommendedPost.slug.current}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${recommendedPost.slug.current}`} className="block">
                <div className="relative aspect-video">
                  <Image
                    src={recommendedPost.image ? urlFor(recommendedPost.image)?.width(400).height(225).url() || '' : '/placeholder-image.jpg'}
                    alt={recommendedPost.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={225}
                  />

                  {recommendedPost.categories && recommendedPost.categories.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2">
                      {recommendedPost.categories.slice(0, 2).map((category: SanityCategory) => (
                        <span
                          key={category._id}
                          className="px-2 py-1 bg-teal-600 text-white text-xs font-medium rounded-full"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <time
                    dateTime={recommendedPost.publishedAt}
                    className="text-sm text-gray-500"
                  >
                    {new Date(recommendedPost.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 hover:text-teal-600 transition-colors">
                    {recommendedPost.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {recommendedPost.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-teal-600 font-medium">
                    Read more
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}