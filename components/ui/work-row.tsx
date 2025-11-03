"use client";

import Image from "next/image";
import { WorkInfo } from "@/lib/types";
import { formatWorkPeriod } from "@/lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export default function WorkRow({
  idx,
  workInfo,
}: {
  idx: number;
  workInfo: WorkInfo;
}) {
  return (
    <AccordionItem value={"work-" + idx.toString()} className="border-none">
      <AccordionTrigger className="hover:no-underline [&>svg]:hidden py-0">
        <div className="flex flex-row gap-4 items-start w-full">
          {/* Image container */}
          <div className="relative h-12 w-12 flex-shrink-0">
            {typeof workInfo.companyLogoUrl === 'string' ? (
              <img
                src={workInfo.companyLogoUrl}
                alt="Company logo"
                className="rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out w-full h-full object-cover"
              />
            ) : (
              <Image
                src={workInfo.companyLogoUrl}
                alt="Company logo"
                fill
                className="rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out object-cover"
              />
            )}
          </div>
          
          {/* Company info */}
          <div className="flex flex-col flex-1 gap-0 text-left min-w-0">
            <div className="flex flex-row justify-between items-baseline w-full gap-4">
              <div className="text-slate-700 dark:text-slate-100 font-semibold text-base sm:text-lg leading-tight">
                {workInfo.role}
              </div>
              {workInfo.start_date && (
                <div className="hidden sm:block text-slate-500 dark:text-slate-400 text-sm font-normal whitespace-nowrap">
                  {formatWorkPeriod(workInfo.start_date, workInfo.end_date)}
                </div>
              )}
            </div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-normal">
              {workInfo.companyName}
            </div>
            {workInfo.start_date && (
              <div className="sm:hidden text-slate-500 dark:text-slate-400 text-xs font-normal mt-0.5">
                {formatWorkPeriod(workInfo.start_date, workInfo.end_date)}
              </div>
            )}
          </div>
        </div>
      </AccordionTrigger>
      
      {(workInfo.description || workInfo.listDescription || workInfo.tags) && (
        <AccordionContent className="text-slate-700 dark:text-slate-300 pl-16">
          <div>{workInfo.description}</div>
          {workInfo.listDescription && (
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              {workInfo.listDescription.map((desc, idx) => (
                <li key={idx} className="text-sm">{desc}</li>
              ))}
            </ul>
          )}
          {workInfo.tags && (
            <div className="flex flex-row gap-2 flex-wrap mt-4">
              {workInfo.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="px-2 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs transition ease-in-out hover:scale-110 font-semibold text-slate-500 dark:text-slate-400"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </AccordionContent>
      )}
    </AccordionItem>
  );
}