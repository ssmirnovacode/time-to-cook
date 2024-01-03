import styles from "./loading.module.css";

export default function LoadingMeals() {
  console.log("Loading meals");
  return <p className={styles.loading}>Loading meals...</p>;
}
