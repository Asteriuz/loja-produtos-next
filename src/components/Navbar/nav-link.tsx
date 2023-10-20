"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export { NavLink };

export default function NavLink({ href, exact = false, children, ...props }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " nav-active";
  }

  return (
    <Link
      href={href}
      className="hover:text-red-400 transition-colors duration-300"
    >
      <p {...props}>{children}</p>
    </Link>
  );
}
