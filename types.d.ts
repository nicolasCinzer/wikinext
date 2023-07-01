type Result = {
  pageid: string
  title: string
  extract: string
  thumbnail?: Thumbnail
}

type Thumbnail = {
  source: string
  width: number
  height: number
}

type SearchResult = {
  query?: { pages?: Result[] }
}
