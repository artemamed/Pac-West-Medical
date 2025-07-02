"use client";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { Mail } from "lucide-react";
import image_logo from "@/public/images/Footer/footer_logo.png";
import image1 from "@/public/images/Footer/footer1.png";
import image2 from "@/public/images/Footer/footer2.png";

// --- Types ---
interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

interface FooterLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

interface FooterSocialProps {
  href: string;
  icon: ReactNode;
  label: string;
  hoverBg: string;
}

// --- Footer Section Wrapper ---
function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="flex flex-col items-center md:items-start h-full">
      <div className="footer-glass-card p-6 h-full w-full">
        <h4 className="text-xl font-semibold mb-4 tracking-wide text-white drop-shadow neon-glow">
          {title}
        </h4>
        <ul className="text-gray-200 space-y-2 text-center md:text-left">
          {children}
        </ul>
      </div>
    </div>
  );
}

// --- Link Wrapper ---
function FooterLink({
  children,
  className = "",
  ...props
}: FooterLinkProps) {
  return (
    <Link
      {...props}
      className={`transition-all font-medium text-gray-200 hover:text-accent hover:pl-2 duration-150 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
}

// --- Social Icon ---
function FooterSocial({ href, icon, label, hoverBg }: FooterSocialProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group"
    >
      <span
        className={`
          inline-block text-xl md:text-2xl p-2 rounded-full
          bg-white/10 transition-all duration-200
          group-hover:scale-110 group-hover:text-white shadow-lg
          ${hoverBg}
        `}
        style={{ transitionProperty: 'background, box-shadow, transform, color' }}
      >
        {icon}
      </span>
    </Link>
  );
}


export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-[#012121] via-[#025050]/95 to-[#002828] pt-12 pb-0 relative overflow-hidden z-20">
      {/* Neon gradient blur background */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[130vw] h-64 bg-gradient-to-br from-[#16f5a0]/20 via-[#3be2e2]/30 to-transparent blur-3xl opacity-60 pointer-events-none z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {/* First Column - Brand / Address */}
          <div className="col-span-1 lg:col-span-2 flex flex-col">
            <div className="footer-glass-card flex flex-col items-center md:items-start p-6 h-full gap-2">
              <Image
                src={image_logo}
                alt="Logo"
                className="w-auto max-w-[190px] drop-shadow-xl animate-fade-in"
                priority
              />
              <p className="text-gray-200 text-sm md:text-base mt-5 text-center md:text-left">
                3262 E THOUSAND OAKS BLVD STE 204 THOUSAND OAKS, CA 91362
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                <Image
                  src={image1}
                  alt="Cert"
                  className="h-20 w-auto object-contain -mt-5 animate-fade-in-up"
                />
                <Image
                  src={image2}
                  alt="Cert2"
                  className="h-10 w-auto object-contain animate-fade-in-up"
                />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <FooterSection title="Company">
            <li>
              <FooterLink href="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink href="/about">About Us</FooterLink>
            </li>
            <li>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </li>
          </FooterSection>

          {/* Expertise Links */}
          <FooterSection title="Our Expertise">
            <li>
              <FooterLink href="/category">Surgical Instruments</FooterLink>
            </li>
            <li>
              <FooterLink href="/biomedical">Biomedical Equipment</FooterLink>
            </li>
          </FooterSection>

          {/* Resources Links */}
          <FooterSection title="Resources">
            <li>
              <FooterLink href="/faqs">FAQ&apos;s</FooterLink>
            </li>
            <li>
              <FooterLink href="/ifu">IFU</FooterLink>
            </li>
            <li>
              <FooterLink href="/blog">Blog</FooterLink>
            </li>
          </FooterSection>

          {/* Legal + Social */}
          <div className="flex flex-col items-center md:items-start h-full col-span-1 lg:col-span-2">
            <div className="footer-glass-card p-6 h-full w-full flex flex-col">
              <h4 className="text-xl font-semibold mb-4 tracking-wide text-white">
                Legal
              </h4>
              <ul className="text-gray-200 space-y-2 text-center md:text-left mb-7">
                <li>
                  <FooterLink href="/terms">Terms & Conditions</FooterLink>
                </li>
                <li>
                  <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                </li>
                <li>
                  <FooterLink href="/refund">Refund Policy</FooterLink>
                </li>
                <li>
                  <FooterLink href="/shipping">Shipping Policy</FooterLink>
                </li>
              </ul>
              <div className="flex gap-4 mt-auto justify-center md:justify-start">
                <FooterSocial
                  href="https://www.facebook.com/profile.php?id=61577684273986"
                  icon={<FaFacebook />}
                  label="Facebook"
                  hoverBg="hover:bg-[#1877F2]"
                />
                <FooterSocial
                  href="https://www.instagram.com/surgical.insturments.us/"
                  icon={<FaInstagram />}
                  label="Instagram"
                  hoverBg="hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]"
                />
                <FooterSocial
                  href="https://www.linkedin.com/company/107532322/admin/dashboard/"
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                  hoverBg="hover:bg-[#0A66C2]"
                />
                <FooterSocial
                  href="https://www.pinterest.com/pacwestsurgical/"
                  icon={<FaPinterest />}
                  label="YouTube"
                  hoverBg="hover:bg-[#FF0000]"
                />

              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Bottom Bar */}
      <div className="bg-[#cfe7e7] p-4 mt-12 shadow-inner border-t border-[#b0d7d7] z-20 relative">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#013232]">
          <p className="text-center sm:text-left font-semibold tracking-wide">
            &copy; 2025 Pac West LLC. All rights reserved.
          </p>
          <p className="text-center sm:text-left font-semibold">Powered by Artema Tech</p>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="font-semibold">sales@artemamed.com</span>
          </div>
        </div>
      </div>

      {/* --- Extra styling --- */}
      <style jsx>{`
        .footer-glass-card {
          background: rgba(2, 60, 60, 0.38);
          border: 1.5px solid rgba(255, 255, 255, 0.18);
          border-radius: 1.4rem;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 0px 8px 2px #13efac40;
          backdrop-filter: blur(12px);
        }
        .neon-glow {
          text-shadow: 0 0 6px #34ffe6bb, 0 0 20px #13efac60;
        }
        .shadow-accent-glow {
          box-shadow: 0 2px 20px 2px #13efac33, 0 0 10px 2px #13efac18;
        }
        .bg-accent {
          background: linear-gradient(92deg, #13efac 35%, #16f5a0 100%);
        }
        .bg-accent-dark {
          background: linear-gradient(92deg, #13efac 0%, #0ca186 100%);
        }
        .hover\\:bg-accent-dark:hover {
          background: linear-gradient(92deg, #13efac 0%, #0ca186 100%);
        }
        @media (max-width: 640px) {
          .footer-glass-card {
            padding: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
