'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }

  return (
    <form
      className=' col-span-2 flex justify-center gap-4'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='border p-2 border-white border-b-black text-black focus:outline-none'
        placeholder='Search'
      />
      <button className=' bg-red-500 border-red-700 text-red-950 p-2 px-4 border rounded-lg transition-all duration-300 hover:text-black'>
        <FaSearch />
      </button>
    </form>
  )
}
