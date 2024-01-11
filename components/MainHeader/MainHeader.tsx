import Link from "next/link";
import logoImg from "../../public/images/logo.png";
import Image from "next/image";
import styles from "./MainHeader.module.css";
import MainHeaderBG from "./MainHeaderBG";
import NavLink from "./NavLink";
import Navigation from "./Navigation";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBG />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg.src} alt="logo" width={50} height={50} priority />
          Time To Cook
        </Link>

        <Navigation />
      </header>
    </>
  );
}
