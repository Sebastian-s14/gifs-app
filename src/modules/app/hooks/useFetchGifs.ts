import { useCallback, useEffect, useState } from 'react'
import { getGifs } from '../helpers'
import { Gif } from '../interfaces'

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const getImages = useCallback(async () => {
    const images = await getGifs(category)
    setGifs(images)
    setIsLoading(false)
  }, [category])

  useEffect(() => {
    getImages()
  }, [getImages])

  return {
    gifs,
    isLoading,
  }
}
