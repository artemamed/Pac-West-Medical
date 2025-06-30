"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";
import LayoutWrapper from "@/components/Wrapper/LayoutWrapper";
import UpcomingPodcastButton from "@/components/podcast/UpcomingPodcastButton";
import Image from "next/image";

function Page() {
  const [userEmail, setUserEmail] = useState("");
  const specificEmail = "example@example.com"; // The specific email to check against

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await getUserEmail();
      setUserEmail(email);
    };

    fetchUserEmail();
  }, []);

  const getUserEmail = async () => {
    return "example@example.com";
  };

  return (
    <div className="">
      <div className="bg-gradient-to-tr from-black to-slate-800 w-full h-52 lg:h-60">
        <LayoutWrapper className="text-white text-5xl sm:text-5xl md:text-6xl font-semi-bold pt-28 sm:pt-28 md:pt-24 lg:pt-[122px]">
          Podcasts
        </LayoutWrapper>
        {userEmail === specificEmail && <UpcomingPodcastButton />}
      </div>

      <LayoutWrapper>
        <div className=" md:w-1/2  lg:mt-24 mt-36 ">
          {" "}
          <Fade triggerOnce duration={4000}>
            <div>
              {" "}
              <p className="md:text-3xl  lg:text-4xl  font-bold">
                Welcome To The Podcast System
              </p>
              <p className="md:text-xl text-gray-800 mt-4 ">
                {" "}
                Join us on a journey through the intricacies of the energy and
                healthcare industries, where we delve deep into innovative
                solutions tailored to empower your business for sustainable
                success and societal impact
              </p>
            </div>
          </Fade>
        </div>
        <Image width={3000} height={3000} src="/images/lean.png" alt="" className="lg:hidden mt-4" />

        <div className=" mt-28">
          <div className="mt-6">
            <h2 className="md:text-3xl mb-1 font-bold ">
              The Lean Effect Podcast
            </h2>
            <h4 className="text-center my-4 font-semibold text-2xl">
              {" "}
              <u>
                Lean is not just about the process, It&apos;s about people.
              </u>{" "}
            </h4>
            <p className=" text-base md:text-lg text-gray-700 ">
              Our mission is to apply lean principles in your role and in your
              business. The Lean Effect Podcast focuses on lean principles for
              holistic organizational efficiency and leadership development.
              Featuring experts like John Ervin, episodes cover healthcare,
              change management, and lean applications across diverse sectors.
              It&apos;s a valuable resource for professionals aiming for
              operational excellence through effective leadership and lean
              methodologies.
            </p>
            <div className="md:flex justify-between">
              <div className="md:w-1/2">
                <span className="font-bold md:text-xl  ">Topic: </span>
                <p className="md:text-lg">
                  {" "}
                  <span className="font-semibold">
                    {" "}
                    “John Ervin: (EP 114) Lean:
                  </span>{" "}
                  Beyond Processes, Emphasizing People”
                </p>
                <span className="font-bold md:text-xl mt-2 ">Title:</span>
                <p className="md:text-lg">
                  {" "}
                  In this episode, John Ervin explores the holistic nature of
                  Lean principles, highlighting their focus on not just
                  optimizing processes, but also prioritizing the well-being and
                  engagement of people within organizations.
                </p>
                <br />
                <span className="font-bold md:text-xl ">Podcast Link: </span>
                <Link
                  href="https://podcasts.apple.com/ru/podcast/john-ervin-ep-114-lean-is-not-just-about-process-its/id1547155147?i=1000578737238"
                  className="md:text-lg text-blue-700"
                >
                  {" "}
                  <u>
                    https://podcasts.apple.com/ru/podcast/john-ervin-ep-114-lean-is-not-just-about-process-its/id1547155147?i=1000578737238
                  </u>
                </Link>
              </div>
              <Zoom triggerOnce>
                {" "}
                <div className="my-2">
                  <Image width={3000} height={3000} src="/images/lean.png" alt="" />
                </div>
              </Zoom>
            </div>

            {/* <div className="mt-8">
              <NextVideo src={sample} />
            </div> */}
            <div className=" text-gray-700 md:text-lg">
              <b>Description:</b> <br />
              In this engaging episode, John Ervin, boasting over 20 years of
              invaluable healthcare leadership experience spanning both military
              medicine and the civilian sector, delves into his journey of
              leadership development, starting with his formative years in the
              United States military. He shares insights on how his military
              service laid the groundwork for his involvement with lean
              methodologies, highlighting the transformative impact of lean
              principles on organizational efficiency and effectiveness. <br />{" "}
              During the discussion, John delves into the intricacies of change
              management, emphasizing its pivotal role in driving organizational
              growth and adaptation. He elucidates on the stages of change,
              emphasizing the importance of fostering awareness, desire, and
              knowledge among team members to facilitate successful transitions
              and improvements within healthcare settings. A notable highlight
              of the conversation is John&apos;s admiration&quot; for
              Re-Creating the Corporation&quot; by Russell L. <br /> Ackoff,
              which he cites as his favorite book. This influential work likely
              served as a cornerstone in shaping John&apos;s perspectives on
              organizational dynamics and strategic management. As the
              conversation unfolds, listeners are encouraged to explore the
              diverse book recommendations provided by guests on the show,
              inviting them to expand their knowledge and insights. If
              you&apos;re intrigued by John&apos;s recommendation or wish to
              explore other insightful reads recommended by our esteemed guests,
              be sure to check out our curated list of top book recommendations.
              And don&apos;t forget to share your own favorite book with us;
              we&apos;re eager to discover new literary gems that resonate with
              our audience.
            </div>
            <div>
              {" "}
              <span className="font-bold md:text-xl ">Guest: </span>
              <span className="md:text-lg"> Jhon Ervin </span> <br />
              <span className="font-bold md:text-xl ">Gmail: </span>
              <span className="md:text-lg"> johnaervin3@gmail.com </span> <br />
              <span className="font-bold md:text-xl ">LinkedIn: </span>
              <Link href="https://www.linkedin.com/in/johnaervin/">
                <span className="md:text-lg text-blue-700">
                  {" "}
                  <u>https://www.linkedin.com/in/johnaervin/</u>{" "}
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="font-bold md:text-3xl">Podcast #215</h1>
            <h2 className="md:text-3xl mb-3 mt-5 font-bold ">
              Lean & Patient Safety
            </h2>
            <div className="md:flex justify-between">
              <div className="md:w-1/2 ">
                <span className="font-bold md:text-xl ">Topic: </span>
                <p className="md:text-lg ">
                  {" "}
                  “John Ervin, Lean & Patient Safety in the Operating Room by
                  Mark Graban”{" "}
                </p>
                <span className="font-bold md:text-xl ">Title: </span>
                <p className="md:text-lg ">
                  {" "}
                  In this episode, John Ervin explores the holistic nature of
                  Lean principles, highlighting their focus on not just
                  optimizing processes, but also prioritizing the well-being and
                  engagement of people within organizations.
                </p>
                <span className="font-bold md:text-xl  ">
                  Podcast Link:{" "}
                </span>{" "}
                <br />
                <Link
                  href="https://www.leanblog.org/2015/02/podcast-215-john-ervin-lean-patient-safety-in-the-operating-room/"
                  className="md:text-lg text-blue-700"
                >
                  {" "}
                  <u className="text-md ">
                    {" "}
                    https://www.leanblog.org/2015/02/podcast-215-john-ervin-lean-patient-safety-in-the-operating-room/
                  </u>{" "}
                </Link>
              </div>
              <Zoom triggerOnce>
                {" "}
                <div className=" my-2 md:-mt-8 ">
                  <Image width={3000} height={3000} src="/images/lean.png" alt="Mark Graban" />
                  <h4 className="text-center font-bold">Mark Graban </h4>
                </div>
              </Zoom>
            </div>
            {/* <div className="mt-8">
              <NextVideo src={sample} />
            </div> */}
            <div className="mt-2   text-gray-700 md:text-lg">
              <b>Description:</b>
              <br />
              Today&apos;s guest is my dear friend John Ervin, and it&apos;s a
              pleasure to have him join us as we sit down together in San
              Antonio for this episode. With nearly 20 years of extensive
              healthcare leadership experience, John has made significant
              contributions in both military medicine and the civilian sector.
              Throughout his career, he has held managerial and directorial
              positions in various hospital and surgical center settings,
              bringing a wealth of expertise to the table.
              <br /> In an exciting 2022 update, John has become a valued member
              of our team, now serving as my esteemed colleague at Value
              Capture. Together, we had the opportunity to collaborate on an
              engagement with a prominent Philadelphia health system, leveraging
              our collective knowledge and passion for driving positive change
              in healthcare. <br />
              Our shared enthusiasm for Lean methodologies and, more
              importantly, patient safety, unites us in our mission. We firmly
              believe in the crucial role that organizational culture and
              leadership play in fostering and sustaining a culture of safety
              within healthcare environments. Today&apos;s conversation will
              center around these fundamental principles, exploring how the
              right culture and leadership can nurture a safe and supportive
              environment for both patients and healthcare professionals alike.
            </div>
          </div>
          <div className="mt-10">
            <h2 className="md:text-3xl mb-3 mt-5 font-bold ">
              Inspiring Careers in Nursing
            </h2>
            <div className="md:flex justify-between">
              <div className="md:w-1/2 ">
                <span className="font-bold md:text-xl ">Title: </span>
                <p className="md:text-lg ">
                  {" "}
                  Nurses in the Military and Consulting with John Ervin WXV&U
                  Health
                </p>
                <br />
                <span className="font-bold md:text-xl  ">
                  Podcast Link:{" "}
                </span>{" "}
                <br />
                <Link
                  href="https://podcasts.apple.com/us/podcast/wxv-u-health/id1651109403?i=1000633032832"
                  className="md:text-lg "
                >
                  {" "}
                  <u className="text-md text-blue-700">
                    {" "}
                    https://podcasts.apple.com/us/podcast/wxv-u-health/id1651109403?i=1000633032832
                  </u>{" "}
                </Link>
              </div>
              <Zoom triggerOnce>
                {" "}
                <div className="  md:-mt-8 ">
                  <Image width={3000} height={3000} src="/images/lean.png" alt="careers in Nursing" />
                  <h4 className="text-center font-bold">Mark Graban </h4>
                </div>
              </Zoom>
            </div>
            {/* <div className="mt-8">
              <NextVideo src={sample} />
            </div> */}
            <div className="mt-2   text-gray-700 md:text-lg">
              <b>Description:</b>
              <br />
              This is the third episode of Inspiring Careers in Nursing, the
              podcast where we hear from Villanova Fitzpatrick College of
              Nursing Alumni about the different career paths they have taken to
              inform and inspire our listeners.
              <br /> In an exciting 2022 update, John has become a valued member
              of our team, now serving as my esteemed colleague at Value
              Capture. Together, we had the opportunity to collaborate on an
              engagement with a prominent Philadelphia health system, leveraging
              our collective knowledge and passion for driving positive change
              in healthcare. <br />
              In this episode, Nicole Blanche Guerin interviewed John Ervin.
              John is a doctoral candidate in strategic leadership with an
              emphasis on idealized design strategic consulting and systems
              thinking. His doctoral thesis research focuses on innovations in
              the cannabis and industrial hemp industry. As an experienced
              healthcare entrepreneur, his success has been augmented through
              experiences in the airline industry, the Department of Homeland
              Security, insurance and financial services, and the medical device
              industry.
            </div>
            <p className="text-black mt-2 lg:text-lg">
              John is an accomplished senior leader and former military officer
              with executive expertise in nationally ranked healthcare
              organizations, with extensive success in consulting, strategic
              planning, operations, and innovation. He is skilled in performing
              in complex environments with product and loss, profitability,
              growth, and revenue responsibilities. Adept at executive coaching
              and developing healthcare professionals and entrepreneurs., John
              has provided coaching and mentoring to several healthcare
              startups, including Avicenna, MyEzHealth, and Health Connect.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}

export default Page;
