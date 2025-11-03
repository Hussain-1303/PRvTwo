"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectInfo } from "@/lib/types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export default function ProjectRow({
  idx,
  projectInfo,
}: {
  idx: number;
  projectInfo: ProjectInfo;
}) {
  return (
    <AccordionItem value={"project-" + idx.toString()} className="border-none">
      <AccordionTrigger className="hover:no-underline [&>svg]:hidden py-0">
        <div className="flex flex-row gap-4 items-start w-full">
          {/* Logo container */}
          <div className="relative h-12 w-12 flex-shrink-0">
            {projectInfo.customLogo ? (
              projectInfo.customLogo
            ) : typeof projectInfo.projectLogoUrl === "string" ? (
              <img
                src={projectInfo.projectLogoUrl}
                alt="Project logo"
                className="rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out w-full h-full object-cover"
              />
            ) : projectInfo.projectLogoUrl ? (
              <Image
                src={projectInfo.projectLogoUrl}
                alt="Project logo"
                fill
                className="rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out object-cover"
              />
            ) : null}
          </div>

          {/* Project info */}
          <div className="flex flex-col flex-1 gap-0 text-left min-w-0">
            <div className="flex flex-row justify-between items-baseline w-full gap-4">
              <div className="text-slate-700 dark:text-slate-100 font-semibold text-base sm:text-lg leading-tight">
                {projectInfo.projectName}
              </div>
              {projectInfo.projectLink && (
                <Link
                  href={projectInfo.projectLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hidden sm:flex text-slate-500 dark:text-slate-400 text-sm font-normal hover:underline whitespace-nowrap"
                  onClick={(e) => e.stopPropagation()}
                >
                  View →
                </Link>
              )}
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-normal">
              {projectInfo.projectCaption}
            </div>
          </div>
        </div>
      </AccordionTrigger>

      {(projectInfo.description ||
        projectInfo.listDescription ||
        projectInfo.tags) && (
        <AccordionContent className="text-slate-700 dark:text-slate-300 pl-16">
          {projectInfo.description && (
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              {projectInfo.description
                .split(". ")
                .filter((s) => s.trim())
                .map((sentence, idx) => (
                  <li key={idx}>
                    {sentence.trim()}
                    {sentence.endsWith(".") ? "" : "."}
                  </li>
                ))}
            </ul>
          )}
          {projectInfo.listDescription && (
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              {projectInfo.listDescription.map((desc, idx) => (
                <li key={idx} className="text-sm">
                  {desc}
                </li>
              ))}
            </ul>
          )}
          {projectInfo.tags && (
            <div className="flex flex-row gap-2 flex-wrap mt-4">
              {projectInfo.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="px-2 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs transition ease-in-out hover:scale-110 font-semibold text-slate-500 dark:text-slate-400"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          {projectInfo.projectLink && (
            <Link
              href={projectInfo.projectLink}
              target="_blank"
              rel="noreferrer noopener"
              className="sm:hidden inline-flex text-slate-500 dark:text-slate-400 text-sm hover:underline mt-2"
            >
              View Project →
            </Link>
          )}
        </AccordionContent>
      )}
    </AccordionItem>
  );
}
