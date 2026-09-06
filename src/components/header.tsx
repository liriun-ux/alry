"use client"
import Modal from "./Menu";
export default function Header() {
  return (
    <header className="header">
      <Modal/>
      <div className="logo display">
        AL<span className="text-[#ff0000]">RY</span>
      </div>
    </header>
  );
}
