"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Overview", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex min-h-20 flex-wrap items-center justify-between gap-6 border-b border-[#d9ded7] px-6 py-4 lg:px-16">
      <Link className="text-2xl font-black tracking-tight" href="/" aria-label="Ari Pratama home">
        AP<span className="text-[#728d2f]">.</span>
      </Link>
      <nav className="order-3 flex w-full items-center justify-between gap-3 sm:order-0 sm:w-auto sm:gap-8" aria-label="Main navigation">
        {navigation.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link
              className={`rounded-full px-3 py-2 text-xs font-bold transition sm:text-sm ${active ? "bg-[#17251f] text-[#d6f36a]" : "text-[#65716a] hover:text-[#17251f]"}`}
              href={href}
              aria-current={active ? "page" : undefined}
              key={href}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <a className="inline-flex items-center gap-3 rounded-full bg-[#17251f] px-4 py-3 text-xs font-bold text-white" href="mailto:hello@example.com">
        Let&apos;s talk <span className="text-lg text-[#d6f36a]" aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
