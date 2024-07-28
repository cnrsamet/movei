import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made With ❤️ by&nbsp;
      <Link href="https://sametcaner.com" target="_blank">
        Samet CANER
      </Link>
    </footer>
  );
}

export default Footer;
