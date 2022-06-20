import { Gif } from '../interfaces'
export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${
    import.meta.env.VITE_APP_API_KEY
  }&q=${category}&limit=10`

  const response = await fetch(url)
  const { data } = await response.json()
  // console.log(data)
  const gifs: Gif[] = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))
  console.log(gifs)
  return gifs
}
