import Link from "next/link";
import logoImg from "../../assets/logo.png";
import Image from "next/image";
import styles from "./MainHeader.module.css";
import MainHeaderBG from "./MainHeaderBG";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBG />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg.src} alt="logo" width={50} height={50} priority />
          Time To Cook
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Time To Cook community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
