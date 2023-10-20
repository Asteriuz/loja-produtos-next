import Image from 'next/image'
import React from 'react'

export default function codigo() {
  return (
    <div className='bg-cinza-escuro flex items-center justify-center'>
        <Image className='w-80' width={340} height={596} src="/codigo.png" alt="Código Fonte"/>
    </div>
  )
}
