import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import styles from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          One common passion: <span className={styles.highlight}>BURGERS</span>
        </h1>
        <p>Join our club and share your best recipes!</p>
      </header>
      <main className={styles.main}>
        <h2>Club membership Perks</h2>

        <ul className={styles.perks}>
          <li>
            <Image src={mealIcon} alt="Tasty meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="People cooking" />
            <p>Find new friends & like-minded folks</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="People at a cooking event" />
            <p>Participate in our special events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
