import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}></div>
        <div>
          <div className={styles.hero}>
            <h1>Taking burgers to the next level</h1>
            <p>Enjoy all the variety of our delicious stuff</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore our meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            Burgertime is a platform dedicated to burger enthusiasts, offering a
            space to share and explore mouthwatering burger recipes. It&apos;s a
            hub where you can uncover exciting new burger creations and connect
            with fellow burger lovers.
          </p>
          <p>
            Burgertime is not just a platform; it&apos;s a community where the
            joy of burgers brings people together, making it the perfect place
            to share, discover, and celebrate the world of delicious burgers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Burgertime?</h2>
          <p>
            Burgertime provides a unique space for burger aficionados to
            showcase their favorite recipes with a global audience. It&apos;s
            more than just a platform; it&apos;s a vibrant community where the
            love for burgers creates lasting connections among food enthusiasts.
          </p>
          <p>
            Whether you&apos;re a seasoned burger chef or just starting your
            culinary journey, Burgertime is the ideal destination to discover
            new and exciting burger creations while connecting with like-minded
            individuals who share your passion for the perfect patty.
          </p>
        </section>
      </main>
    </>
  );
}
