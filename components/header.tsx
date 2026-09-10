"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="ShelterTech home" onClick={() => setOpen(false)}>
          <Image src="/brand/sheltertech-logo.svg" alt="ShelterTech" width={146} height={44} priority />
        </Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle navigation</span>
          <span /><span />
        </button>
        <nav id="site-navigation" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-donate" href="/donate" data-donation-cta="header" onClick={() => setOpen(false)}>Donate</Link>
        </nav>
      </div>
    </header>
  );
}
