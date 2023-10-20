import Link from "next/link";

export default function Produtos() {
  return (
    <div className="flex flex-col items-center gap-y-8 mt-8">
      <h1 className="text-4xl">PRODUTOS</h1>
      <ul className="flex gap-x-20 text-2xl text-white flex-wrap gap-y-10 items-center justify-center">
        <div className="px-2 bg-laranja-claro hover:bg-transparent hover:border-laranja-claro hover:border-2 hover:scale-105 transition-all duration-500 ease-in-out py-1 rounded-lg ">
          <li>
            <Link
              className="hover:text-laranja-claro  duration-300 transition-colors"
              href="/produtos/camisa"
            >
              Camisa
            </Link>
          </li>
        </div>
        <div className="px-2 bg-laranja-claro hover:bg-transparent hover:border-laranja-claro hover:border-2 hover:scale-105 transition-all duration-500 ease-in-out py-1 rounded-lg ">
          <li>
            <Link
              className="hover:text-laranja-claro  duration-300 transition-colors"
              href="/produtos/sapato"
            >
              Sapato
            </Link>
          </li>
        </div>
        <div className="px-2 bg-laranja-claro hover:bg-transparent hover:border-laranja-claro hover:border-2 hover:scale-105 transition-all duration-500 ease-in-out py-1 rounded-lg ">
          <li>
            <Link
              className="hover:text-laranja-claro  duration-300 transition-colors"
              href="/produtos/calca"
            >
              Calça
            </Link>
          </li>
        </div>
        <div className="px-2 bg-laranja-claro hover:bg-transparent hover:border-laranja-claro hover:border-2 hover:scale-105 transition-all duration-500 ease-in-out py-1 rounded-lg ">
          <li>
            <Link
              className="hover:text-laranja-claro  duration-300 transition-colors"
              href="/produtos/bone"
            >
              Boné
            </Link>
          </li>
        </div>
        <div className="px-2 bg-laranja-claro hover:bg-transparent hover:border-laranja-claro hover:border-2 hover:scale-105 transition-all duration-500 ease-in-out py-1 rounded-lg ">
          <li>
            <Link
              className="hover:text-laranja-claro  duration-300 transition-colors"
              href="/produtos/oculos"
            >
              Óculos
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
