import Link from "next/link";

export default function Produtos() {
  return (
    <div className="flex flex-col items-center gap-y-8 mt-8">
      <h1 className="text-4xl">PRODUTOS</h1>
      <ul className="flex gap-x-20 text-2xl flex-wrap gap-y-10 items-center justify-center">
        <li>
          <Link
            className="hover:text-red-400 duration-300 transition-colors"
            href="/produtos/camisa"
          >
            Camisa
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-400 duration-300 transition-colors"
            href="/produtos/calca"
          >
            Calça
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-400 duration-300 transition-colors"
            href="/produtos/sapato"
          >
            Sapato
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-400 duration-300 transition-colors"
            href="/produtos/bone"
          >
            Boné
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-400 duration-300 transition-colors"
            href="/produtos/oculos"
          >
            Óculos
          </Link>
        </li>
      </ul>
    </div>
  );
}
