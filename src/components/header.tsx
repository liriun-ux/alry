"use client"
import Modal from "./Menu";
import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <Modal/>
      <Link className="logo display" href="/">
        AL<span className="logo-acent">RY</span>
      </Link>
    </header>
  );
}
