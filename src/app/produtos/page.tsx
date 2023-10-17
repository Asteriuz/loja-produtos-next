'use client'

import Link from "next/link";
import { useState } from "react";

export default function Produtos() {
  return <div>
    <h1>PRODUTOS</h1>
    <ul>
      <li><Link href="/produtos/camisa">Camisa</Link></li>
      <li><Link href="/produtos/calca">Calça</Link></li>
      <li><Link href="/produtos/sapato">Sapato</Link></li>
      <li><Link href="/produtos/bone">Boné</Link></li>
      <li><Link href="/produtos/oculos">Óculos</Link></li>
    </ul>
  </div>;
}
