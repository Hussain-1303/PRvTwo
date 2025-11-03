import Link from "next/link";

export default function Navbar({ page }: { page?: string }) {
  const links = [
    { text: "home", link: "/" },
    { text: "work", link: "/work" },
    { text: "projects", link: "/projects" },
  ];

  return (
    <nav className="flex flex-row gap-2 items-center">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.link}
          className={`text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 px-3 py-2 rounded-lg transition font-medium hover:scale-105 ${
            page === link.text ? "bg-slate-200 dark:bg-slate-800" : ""
          }`}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}