"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdOutlineSpaceDashboard } from "react-icons/md";
import { cn } from "@/lib/utils";
const ProfilePic = "/profile.jpg";
import NavbarDropdown from "@/components/ui/navbar-dropdown";

const trackResumeDownload = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'file_download', {
      file_name: 'Hussain_Vahora_Resume',
      file_extension: 'pdf',
      link_text: 'Resume'
    });
  }
};

const links = [
  { text: "work", link: "/work" },
  { text: "projects", link: "/projects" },
  { text: "resume", link: "/HussainVahoraResume.pdf", onClick: trackResumeDownload },
];

const socialButtonStyle =
  "text-slate-500 dark:text-slate-300 text-2xl hover:bg-slate-200 dark:hover:bg-slate-800 p-2 h-full w-full aspect-square transition rounded-lg hover:scale-105";

const socials = [
  {
    glyph: <FaGithub className={socialButtonStyle} />,
    link: "https://github.com/Hussain-1303",
  },
  {
    glyph: <FaLinkedinIn className={socialButtonStyle} />,
    link: "https://www.linkedin.com/in/hussain-vahora/",
  },
  {
    glyph: <MdEmail className={socialButtonStyle} />,
    link: "mailto:vahomoha@sheridancollege.ca",
  },
];

const mobileSocialIconStyle = "text-white";
const mobileSocials = [
  {
    glyph: <FaGithub fontSize="1.75em" className={mobileSocialIconStyle} />,
    link: "https://github.com/Hussain-1303",
  },
  {
    glyph: <FaLinkedinIn fontSize="1.5em" className={mobileSocialIconStyle} />,
    link: "https://www.linkedin.com/in/hussain-vahora/",
  },
  {
    glyph: <MdEmail fontSize="1.75em" className={mobileSocialIconStyle} />,
    link: "mailto:vahomoha@sheridancollege.ca",
  },
];

export default function Home() {
  const [imageEffect, setImageEffect] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-4 sm:p-24 bg-slate-100 dark:bg-midnight">
      {/* Mobile */}
      <div className="md:hidden flex flex-col rounded-3xl shadow-2xl shadow-gray-400 dark:shadow-black overflow-clip w-full max-w-[24em]">
        <div className="relative w-full aspect-[4/5]">
          <div className="h-full w-full z-0">
            <Image
              src={ProfilePic}
              alt="Profile picture"
              fill
              className="object-cover"
              onClick={() => setImageEffect(true)}
            />
          </div>
          <div className="z-10 p-6 pt-12 absolute left-0 bottom-0 bg-gradient-to-t from-semiopaque to-transparent w-full">
            <div className="flex flex-col">
              <div className="font-semibold text-3xl text-slate-100 tracking-tight">
                Hussain Vahora
              </div>
              <div className="font-medium text-lg text-slate-300 tracking-tight">
                CS & Tech @ Sheridan College
              </div>
            </div>
          </div>
          {/* Top bar - Mobile with dropdown */}
          <div className="z-10 p-6 absolute left-0 top-0 right-0">
            <div className="flex flex-row gap-4 justify-between items-start">
              <NavbarDropdown asChild forceDarkShadow>
                <button className="bg-moretransparent rounded-full hover:bg-semiopaque transition ease-in-out hover:scale-110 hover:-rotate-12 p-2">
                  <MdOutlineSpaceDashboard
                    fontSize="1.75em"
                    className="text-white"
                  />
                </button>
              </NavbarDropdown>
              <div className="flex flex-col gap-3 items-center">
                {mobileSocials.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-moretransparent rounded-full hover:bg-semiopaque transition ease-in-out hover:scale-110 p-2"
                  >
                    {social.glyph}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Web */}
      <div className="hidden md:flex flex-col md:flex-row gap-6 lg:gap-10 max-w-4xl items-center lg:items-stretch">
        <div className="relative aspect-[4/5] md:h-[12em] lg:h-[16em] flex-shrink-0">
          <Image
            src={ProfilePic}
            alt="Profile picture"
            fill
            className={cn(
              "h-full rounded-xl shadow-xl transition ease-in-out hover:scale-110 duration-500 hover:cursor-pointer object-cover",
              imageEffect && "animate-wiggle"
            )}
            onClick={() => setImageEffect(true)}
            onAnimationEnd={() => setImageEffect(false)}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2 lg:gap-5 w-full flex-1">
            <div className="flex flex-col gap-1">
              <div className="font-bold text-5xl lg:text-7xl text-slate-700 dark:text-slate-100 tracking-tight">
                Hussain Vahora
              </div>
              <div className="font-semibold text-xl lg:text-3xl text-slate-500 dark:text-slate-400 tracking-tight">
                CS & Tech @ Sheridan College
              </div>
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Full-stack developer & leadership enthusiast. Prev. Developer @{" "}
              <Link
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold hover:underline"
                href="https://www.sheridancollege.ca"
              >
                Sheridan College
              </Link>
              . Building innovative solutions.
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-2 -ml-3">
            <div className="flex flex-row gap-2 items-center">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.link}
                  onClick={link.onClick}
                  className="text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 px-3 py-2 rounded-lg transition font-medium hover:scale-105"
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-row gap-2 items-center h-full w-full justify-end">
              {socials.map((social, idx) => (
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  key={idx}
                  href={social.link}
                >
                  {social.glyph}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}