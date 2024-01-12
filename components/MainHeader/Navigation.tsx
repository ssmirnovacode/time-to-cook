"use client";
import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function toggleDrawer() {
    setIsOpen((state) => !state);
  }

  function handleClickOutside(event: MouseEvent) {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  return (
    <nav className={styles.nav} ref={navRef}>
      <div
        className={styles.nav_burger}
        onClick={toggleDrawer}
        role="toggle navigation"
      >
        &#8801;
      </div>
      <ul className={styles.nav_panel} role="navigation panel">
        <li>
          <NavLink href="/meals">Browse meals</NavLink>
        </li>
        <li>
          <NavLink href="/community">Community</NavLink>
        </li>
      </ul>
      <ul
        className={`${styles.nav_drawer} ${
          isOpen ? styles.slideIn : styles.hidden
        }`}
      >
        <li className={styles.drawer_heading}>
          {/* <Image src={logoImg.src} alt="logo" width={50} height={50} priority /> */}
          TIME TO COOK
          <button className={styles.btn_close} onClick={toggleDrawer}>
            X
          </button>
        </li>
        <li onClick={toggleDrawer}>
          <NavLink href="/meals">Browse meals</NavLink>
        </li>
        <li onClick={toggleDrawer}>
          <NavLink href="/community">Community</NavLink>
        </li>
      </ul>
    </nav>
  );
}
