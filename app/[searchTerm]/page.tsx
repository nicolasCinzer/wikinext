import getWikiResults from '@nzc/lib/getWikiResults'
import ResultContent from './components/ResultContent'

type Props = {
  params: {
    searchTerm: string
  }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
    return { title: `${displayTerm} Not Found` }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`
  }
}

export default async function page({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData

  const results: Result[] | undefined = data?.query?.pages

  const content = (
    <main className='flex flex-col items-center'>
      <div className='w-3/4 flex flex-col items-center'>
        {results ? (
          Object.values(results).map(result => (
            <ResultContent
              key={result.pageid}
              result={result}
            />
          ))
        ) : (
          <h2>{`${searchTerm} Not Found`}</h2>
        )}
      </div>
    </main>
  )

  return content
}
