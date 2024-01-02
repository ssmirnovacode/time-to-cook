import Link from "next/link";
import logoImg from "../../../assets/logo.png";
import Image from "next/image";
import styles from "./MainHeader.module.css";
import MainHeaderBG from "./MainHeaderBG";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBG />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg.src} alt="logo" width={50} height={50} priority />
          Burgertime
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse meals</Link>
            </li>
            <li>
              <Link href="/community">Burgertime community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
