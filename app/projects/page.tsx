import Navbar from "@/components/Navbar";
import { ProjectInfo } from "@/lib/types";
import ProjectRow from "@/components/ui/project-row";
import { Accordion } from "@/components/ui/accordion";
import { Book, Activity, Code, Gamepad2 } from "lucide-react";
import NavbarDropdown from "@/components/ui/navbar-dropdown";
import Link from "next/link";


export default function ProjectsPage() {
  const projects: ProjectInfo[] = [
    {
      projectName: "WSC 2025 Projects",
      customLogo: (
        <Link
          href="https://github.com/Hussain-1303"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="relative w-full h-full rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
            <Book className="text-white text-4xl w-full h-full p-2 relative z-10" />
          </div>
        </Link>
      ),
      projectCaption:
        "Interactive Sanskrit learning games for World Sanskrit Conference 2025",
      projectLink: "https://github.com/Hussain-1303",
      description:
        "Led 3 development teams comprising 28 members to deliver interactive Sanskrit learning games (Family Feud, Pictionary and GeoGuesser adaptations) for World Sanskrit Conference 2025. The games engaged 500+ participants and promoted digital Sanskrit education through gamification and modern web technologies.",
      tags: [
        "JavaScript",
        "Game Development",
        "Agile",
        "Team Leadership",
        "HTML/CSS",
      ],
    },
    {
      projectName: "Simply Lab Booking",
      customLogo: (
        <div className="relative w-full h-full rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600" />
          <Code className="text-white text-4xl w-full h-full p-2 relative z-10" />
        </div>
      ),
      projectCaption: "Microsoft 365 lab booking system for Sheridan College",
      description:
        "Architected Microsoft 365 lab booking system using Power Apps, SharePoint, and Power Automate to replace third-party solution. The system manages 15+ lab spaces with 200+ monthly bookings while reducing operational costs by 40% and eliminating external software dependencies. Features include real-time availability tracking, automated notifications, and comprehensive reporting.",
      tags: [
        "Power Apps",
        "SharePoint",
        "Power Automate",
        "Azure AD",
        "Office 365",
        "Microsoft 365",
      ],
    },
    {
      projectName: "WhyNotDoYoga",
      customLogo: (
        <Link
          href="https://github.com/Hussain-1303/WhyNotDoYoga"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Activity className="text-rose-600 dark:text-rose-400 text-4xl w-full h-full p-2 bg-rose-100 dark:bg-rose-950 rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out" />
        </Link>
      ),
      projectCaption:
        "Web app featuring 50+ yoga poses with steps, timer, and translation",
      projectLink: "https://github.com/Hussain-1303/WhyNotDoYoga",
      description:
        "Developed a comprehensive yoga web application for a thriving yoga community with 50+ registered participants around GTA. The app features 50+ Yoga poses with detailed step-by-step instructions, built-in timer for practice sessions, multi-language translation support, and navigation between poses. The platform increased digital participation by 25% and serves as a primary resource for the community's virtual yoga sessions.",
      tags: [
        "Bootstrap",
        "jQuery",
        "Yoga API",
        "Git",
        "HTML/CSS",
        "JavaScript",
      ],
    },
    {
      projectName: "50 Days 50 Mini Web Projects",
      customLogo: (
        <Link
          href="https://github.com/Hussain-1303/50-Days-HTML-CSS-JS"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Code className="text-sky-500 dark:text-sky-400 text-4xl w-full h-full p-2 bg-sky-200 dark:bg-sky-950 rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out" />
        </Link>
      ),
      projectCaption: "Collection of 50 mini web development projects",
      projectLink: "https://github.com/Hussain-1303/50-Days-HTML-CSS-JS",
      description:
        "A comprehensive collection of 50 mini web projects demonstrating various HTML, CSS, and JavaScript techniques. Each project focuses on different aspects of web development, from animations and transitions to API integrations and DOM manipulation. This repository serves as a learning resource and portfolio showcase of fundamental web development skills.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Web Development",
        "Animation",
        "DOM",
      ],
    },
    {
      projectName: "Movie Disposal",
      customLogo: (
        <Link
          href="https://github.com/Hussain-1303/MovieDisposal"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="relative w-full h-full rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600" />
            <Code className="text-white text-4xl w-full h-full p-2 relative z-10" />
          </div>
        </Link>
      ),
      projectCaption: "Movie recommendation and discovery application",
      projectLink: "https://github.com/Hussain-1303/MovieDisposal",
      description:
        "Built a movie recommendation application that helps users discover new films based on their preferences. Features include comprehensive movie search functionality, rating systems, personalized recommendations based on viewing history, and detailed movie information including cast, plot, and reviews.",
      tags: [
        "JavaScript",
        "API Integration",
        "React",
        "Movie API",
        "Web Development",
      ],
    },
    {
      projectName: "GoFishGame",
      customLogo: (
        <Link
          href="https://github.com/Hussain-1303/GoFishGame"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Gamepad2 className="text-emerald-600 dark:text-emerald-400 text-4xl w-full h-full p-2 bg-emerald-100 dark:bg-emerald-950 rounded-lg shadow-lg shadow-slate-200 dark:shadow-black transition hover:scale-110 ease-in-out" />
        </Link>
      ),
      projectCaption: "Digital implementation of the classic card game",
      projectLink: "https://github.com/Hussain-1303/GoFishGame",
      description:
        "Developed a digital version of the classic Go Fish card game with multiplayer capabilities and interactive UI. Implemented comprehensive game logic, scoring system, turn-based gameplay mechanics, and real-time game state management. Features include player vs. computer mode, smooth animations, and responsive design.",
      tags: [
        "Game Development",
        "JavaScript",
        "Logic Design",
        "HTML/CSS",
        "Algorithms",
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-8 md:p-24 bg-slate-100 dark:bg-midnight">
      <div className="flex flex-col gap-4 md:gap-12 max-w-3xl w-full">
        {/* Breadcrumb */}
        <div className="flex flex-row gap-2 items-center text-slate-500 dark:text-slate-400 text-sm">
          <Link
            href="/"
            className="hover:text-slate-700 dark:hover:text-slate-200 transition hover:scale-105"
          >
            hv
          </Link>
          <span>/</span>
          <NavbarDropdown asChild>
            <span className="hover:text-slate-700 dark:hover:text-slate-200 transition hover:scale-105 cursor-pointer">
              ...
            </span>
          </NavbarDropdown>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-200">projects</span>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 w-full">
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-bold text-slate-700 dark:text-slate-200">
              projects
            </div>
            <Accordion type="multiple" className="flex flex-col gap-4">
              {projects.map((project, idx) => (
                <ProjectRow key={idx} idx={idx} projectInfo={project} />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
