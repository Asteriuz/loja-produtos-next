import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page({ params }) {
  const itens = [
    {
      nome: "Boné",
      item: "bone",
      descricao: "Um boné muito bonito",
      img: "/Cards/bone.webp",
    },
    {
      nome: "Calça",
      item: "calca",
      descricao: "Uma calça muito bonita",
      img: "/Cards/calca.webp",
    },
    {
      nome: "Camisa",
      item: "camisa",
      descricao: "Uma camisa muito bonita",
      img: "/Cards/camisa.webp",
    },
    {
      nome: "Óculos",
      item: "oculos",
      descricao: "Um óculos muito bonito",
      img: "/Cards/oculos.webp",
    },
    {
      nome: "Sapato",
      item: "sapato",
      descricao: "Um sapato muito bonito",
      img: "/Cards/sapato.webp",
    },
  ];
  const item = itens.find((item) => item.item === params.item);
  return (
    <div className="flex mt-8 items-center justify-center flex-col w-screen gap-y-8">
      <h1 className="text-4xl">PRODUTOS</h1>
      <div className="max-w-sm rounded overflow-hidden shadow-2xl">
        <Image
          src={item.img}
          className="w-full"
          alt={item.nome}
          width={400}
          height={400}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 capitalize">{item.nome}</div>
          <p className="text-gray-700 text-base">{item.descricao}</p>
        </div>
      </div>
      <Link className="text-blue-400 text-xl mt-8" href="/produtos">
        Voltar
      </Link>
    </div>
  );
}
