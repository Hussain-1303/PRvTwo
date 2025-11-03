"use client";

import * as React from "react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarDropdownProps {
  children: React.ReactNode;
  asChild?: boolean;
  forceDarkShadow?: boolean;
}

export default function NavbarDropdown({
  children,
  asChild,
  forceDarkShadow,
}: NavbarDropdownProps) {
  const links = [
    { text: "home", link: "/" },
    { text: "work", link: "/work" },
    { text: "projects", link: "/projects" },
    { text: "resume", link: "/HussainVahoraResume.pdf" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={asChild}>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className={`bg-white dark:bg-slate-800 ${
          forceDarkShadow ? "shadow-black" : ""
        }`}
      >
        {links.map((link, idx) => (
          <DropdownMenuItem key={idx} asChild>
            <Link
              href={link.link}
              className="cursor-pointer text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              {link.text}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}