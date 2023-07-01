import Image from 'next/image'
import Link from 'next/link'
import { resourceLimits } from 'worker_threads'

type Props = {
  result: Result
}

export default function ResultContent({ result }: Props) {
  const textInfoContainer = (
    <div className='flex flex-col justify-center gap-2'>
      <h2 className='text-xl font-bold underline'>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target='_blank'
        >
          {result.title}
        </Link>
      </h2>
      <p className=' text-sm'>{result.extract}</p>
    </div>
  )

  const content = result.thumbnail?.source ? (
    <article className='m-4 max-w-lg bg-red-300 border border-red-400 rounded-xl p-4 transition-all duration-300 hover:border-red-500 hover:bg-red-400'>
      <div className='flex gap-6'>
        <div className='flex flex-col justify-center'>
          <Image
            alt={result.title}
            src={result.thumbnail?.source}
            width={result.thumbnail?.width}
            height={result.thumbnail?.height}
            loading='lazy'
          />
        </div>
        {textInfoContainer}
      </div>
    </article>
  ) : (
    <article className='m-4 max-w-lg bg-red-300 border border-red-300 rounded-xl p-4'>{textInfoContainer}</article>
  )

  return content
}
