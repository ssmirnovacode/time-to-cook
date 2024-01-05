"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { PropsWithChildren } from "react";

import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
};

export default function NavLink({
  href,
  children,
}: PropsWithChildren<NavLinkProps>) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? styles.active : undefined}
    >
      {children}
    </Link>
  );
}
