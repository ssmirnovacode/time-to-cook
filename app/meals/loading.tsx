import styles from "./loading.module.css";

export default function Loading() {
  console.log("Loading component");
  return <p className={styles.loading}>Loading meals...</p>;
}
