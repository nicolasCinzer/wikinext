import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className='grid grid-cols-1 gap-2 pt-2 pb-6 border-b border-gray-400 mx-12'>
      <h1 className='flex justify-center text-xl font-medium text-white'>
        <Link
          className='bg-red-500 py-1 p-4 rounded-full'
          href={'/'}
        >
          WikiNext
        </Link>
      </h1>
      <Search />
    </nav>
  )
}
