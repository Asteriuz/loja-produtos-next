import React from "react";
import NavLink from "./nav-link";

export default function Nav() {
  return (
    <div className="w-screen py-5 bg-branco text-escuro text-2xl tracking-wider">
      <ul className="flex justify-around">
        <li>
          <NavLink href="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/produtos">
            Produtos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
