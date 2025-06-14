"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "black" }}>
      <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", margin: 0 }}>
      <li><Link href="/home">Home</Link></li>
      <li><Link href="/About">About</Link></li>
      <li><Link href="/Dashboard">Dashboard</Link></li>
      </ul>
      <hr style={{ marginTop: "0.5rem", border: "1px solid black" }} />
    </nav>
  );
}
