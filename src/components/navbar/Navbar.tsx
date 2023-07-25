"use client";
import Link from "next/link";
import React from "react";

import styles from "./navbar.module.css";

const LINKS = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 6,
    title: "Portfolio",
    url: "/portfolio",
  },
];

export function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Llei Pi
      </Link>
      <div className={styles.links}>
        {LINKS.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => {
            console.log("Logged out");
          }}
          className={styles.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
