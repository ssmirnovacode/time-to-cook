"use client";
import Link from "next/link";
import { useState } from "react";
import Spinner from "./Spinner/Spinner";
import styles from "./ButtonLink.module.css";

export default function ButtonLink({
  endpoint = "",
  label = "",
}: {
  endpoint: string;
  label: string;
}) {
  const [loading, setLoading] = useState(false);
  return (
    <Link
      className={styles.link}
      href={endpoint}
      onClick={() => setLoading(true)}
    >
      {label}
      {loading && <Spinner />}
    </Link>
  );
}
