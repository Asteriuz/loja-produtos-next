import Image from "next/image";
import Link from "next/link";
import React from "react";
import itens from "./produtos.json"

export default function page({ params }) {
  //const itens = produtos
  const item = itens.find((item) => item.item === params.item);
  return (
    <div className="flex mt-4 items-center justify-center flex-col w-screen gap-y-2 px-4">
      <div className="max-w-sm rounded overflow-hidden shadow-2xl">
        <div className="max-w-80 max-h-80 overflow-hidden">
          <Image
            src={item.img}
            className="w-full hover:scale-110 overflow-hidden max-h-80 duration-500 transition-transform"
            alt={item.nome}
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-1 capitalize">{item.nome}</div>
          <p className="text-zinc-100 text-lg">{item.descricao}</p>
        </div>
      </div>
      <Link className="text-blue-400 text-xl mt-8" href="/produtos">
        Voltar
      </Link>
    </div>
  );
}
