import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="w-screen py-5 bg-branco text-escuro text-xl">
      <ul className="flex justify-around">
        <li className="text-vermelho-escuro">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/produtos">Produtos</Link>
        </li>
      </ul>
    </div>
  );
}
