import { GifItem } from '.'
import { useFetchGifs } from '../hooks'

interface GifGridProps {
  category: string
}
export const GifGrid = ({ category }: GifGridProps) => {
  const { gifs, isLoading } = useFetchGifs(category)
  return (
    <>
      <h3 className="text-2xl font-bold text-blue-500">{category}</h3>
      {isLoading ? (
        <div className="flex justify-center py-8 w-full">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg> */}
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {gifs.map((gif) => (
            <GifItem key={gif.id} gif={gif} />
          ))}
        </div>
      )}
    </>
  )
}
