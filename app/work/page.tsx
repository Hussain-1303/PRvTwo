import Link from "next/link";
import Navbar from "@/components/Navbar";
import { WorkInfo } from "@/lib/types";
import { formatFromMMMYYYY } from "@/lib/utils";
import WorkRow from "@/components/ui/work-row";
import { Accordion } from "@/components/ui/accordion";
import SheridanLogo from "@/assets/sheridan.jpg";
import LeapGreenLogo from "@/assets/leapgreen.jpg";
import SamskritaLogo from "@/assets/SamskritBharati.jpg";
import McDonaldsLogo from "@/assets/mcdonalds.jpg";
import PeerMentorLogo from "@/assets/peermentor.png";
import HeadstarterLogo from "@/assets/headstarter.jpeg";
import NavbarDropdown from "@/components/ui/navbar-dropdown";

export default function WorkPage() {
  const workInfo: WorkInfo[] = [
    {
      role: "Leadership Coach - SLDE Team",
      companyName: "Sheridan College",
      companyLogoUrl: PeerMentorLogo,
      start_date: formatFromMMMYYYY("Aug 2025"),
      end_date: undefined,
      listDescription: [
        "Scaled team 75% (20→35 members) while mastering PowerApps from zero to production in 2 sprints",
        "Led agile implementation as Scrum Master across 2 products (Pictionary and Geo-Guessr) with 100% timeline adherence",
        "Created lasting organizational frameworks adopted by other coordinators",
        "Delivered 4+ MVPs achieving objectives from diverse stakeholders",
      ],
      tags: ["Power Apps", "SharePoint", "Agile", "Scrum", "Leadership"],
    },
    {
      role: "Full Stack Developer",
      companyName: "Sheridan College",
      companyLogoUrl: SheridanLogo,
      start_date: formatFromMMMYYYY("May 2025"),
      end_date: formatFromMMMYYYY("Aug 2025"),
      listDescription: [
        "Architected Microsoft 365 lab booking system managing 15+ lab spaces with 200+ monthly bookings",
        "Reduced operational costs by 40% and eliminated external software dependencies",
        "Led 3 development teams comprising 28 members in agile methodology",
        "Delivered interactive Sanskrit learning games engaging 500+ participants",
      ],
      tags: [
        "Power Apps",
        "SharePoint",
        "Power Automate",
        "Azure AD",
        "Office 365",
      ],
    },
    {
      role: "Peer Mentor",
      companyName: "Sheridan College",
      companyLogoUrl: PeerMentorLogo,
      start_date: formatFromMMMYYYY("Dec 2024"),
      end_date: formatFromMMMYYYY("Apr 2025"),
      listDescription: [
        "Led orientation and campus engagement programs reaching 420+ students through 50+ activities",
        "Mentored students 1:1 on study skills, time management and mental health",
        "Fostered inclusivity through culturally rich programs achieving 90% participant satisfaction",
      ],
      tags: [
        "Leadership",
        "Mentorship",
        "Event Planning",
        "Community Building",
      ],
    },
    {
      role: "Website Strategist | Developer",
      companyName: "Leap Green Polymers Inc",
      companyLogoUrl: LeapGreenLogo,
      start_date: formatFromMMMYYYY("Jul 2025"),
      end_date: formatFromMMMYYYY("Sep 2025"),
      listDescription: [
        "Redesigned B2B conversion funnel from 3-field basic form to 8-field qualification system",
        "Optimized SEO targeting 12+ keywords for Canadian manufacturing sector",
        "Restructured content architecture from 2000+ word technical specs to business-value messaging",
        "Delivered complete digital transformation within 3-week compressed timeline",
      ],
      tags: ["Web Development", "SEO", "Content Strategy", "B2B Marketing"],
    },
    {
      role: "Junior Web Developer",
      companyName: "Samskrita Bharati",
      companyLogoUrl: SamskritaLogo,
      start_date: formatFromMMMYYYY("Sep 2024"),
      end_date: formatFromMMMYYYY("Dec 2024"),
      listDescription: [
        "Developed Yoga app for 50+ registered participants, increasing digital participation by 25%",
        "Engineered Auto-Scrolling Shloka feature for GeetaSuperSite with >24,000 monthly organic visits",
        "Authored 4+ open-source contributions to improve code productivity",
      ],
      tags: ["React", "JavaScript", "API Integration", "Open Source"],
    },
    {
      role: "Swing Manager & Co-Chair JHSC",
      companyName: "McDonald's",
      companyLogoUrl: McDonaldsLogo,
      start_date: formatFromMMMYYYY("Apr 2024"),
      end_date: undefined,
      listDescription: [
        "Developed and implemented workplace health and safety policies and procedures",
        "Conducted regular inspections to identify and address potential hazards",
        "Trained fellow crew members on health and safety practices and emergency procedures",
        "Maintained serving times under 90 seconds during rush hours",
      ],
      tags: ["Management", "Health & Safety", "Training", "Leadership"],
    },
    {
      role: "Software Engineer Fellow",
      companyName: "Headstarter",
      companyLogoUrl: HeadstarterLogo,
      start_date: formatFromMMMYYYY("May 2024"),
      end_date: formatFromMMMYYYY("Sep 2024"),
      listDescription: [
        "Participated in intensive software engineering fellowship program",
        "Built and deployed multiple full-stack projects",
        "Collaborated with peers on technical challenges and code reviews",
      ],
      tags: ["Full Stack", "React", "Node.js", "Deployment"],
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
          <span className="text-slate-700 dark:text-slate-200">work</span>
        </div>

        <div className="flex flex-col gap-6 md:gap-10 w-full">
          <div className="flex flex-col gap-5">
            <div className="text-3xl font-bold text-slate-700 dark:text-slate-200">
              work
            </div>
            <Accordion type="multiple" className="flex flex-col gap-4">
              {workInfo.map((work, idx) => (
                <WorkRow key={idx} workInfo={work} idx={idx} />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
