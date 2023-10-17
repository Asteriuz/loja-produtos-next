import Link from 'next/link'
import React from 'react'

export default function page({params}) {
  return (
    <div>
        <h1>PRODUTOS</h1>
        <h2>Parâmetro recuperado sempre em formato: {params.item}</h2>
        <Link href="/produtos">Voltar</Link>
    </div>
  )
}
