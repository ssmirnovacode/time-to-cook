import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/Images/ImagesSlideshow";
import ButtonLink from "@/components/common/ButtonLink";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Taking burgers to the next level</h1>
            <p>Enjoy all the variety of our delicious stuff</p>
          </div>
          <div className={styles.cta}>
            <ButtonLink endpoint="/community" label="Join the community" />
            <ButtonLink endpoint="/meals" label="Explore our meals" />
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            Time To Cook is a platform dedicated to cooking enthusiasts,
            offering a space to share and explore mouthwatering recipes.
            It&apos;s a hub where you can uncover exciting new creations and
            connect with fellow food lovers.
          </p>
          <p>
            Time To Cook is not just a platform; it&apos;s a community where the
            joy of cooking brings people together, making it the perfect place
            to share, discover, and celebrate the world of delicious meals.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Time To Cook?</h2>
          <p>
            Time To Cook provides a unique space for food aficionados to
            showcase their favorite recipes with a global audience. It&apos;s
            more than just a platform; it&apos;s a vibrant community where the
            love for food creates lasting connections among food enthusiasts.
          </p>
          <p>
            Whether you&apos;re a seasoned burger chef or just starting your
            culinary journey, Time To Cook is the ideal destination to discover
            new and exciting burger creations while connecting with like-minded
            individuals who share your passion for the perfect patty.
          </p>
        </section>
      </main>
    </>
  );
}
