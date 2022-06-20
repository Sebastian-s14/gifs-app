import { Gif } from '../interfaces'

export interface GifItemProps {
  gif: Gif
}
export const GifItem = ({ gif: { title, url } }: GifItemProps) => {
  return (
    // <div className="flex overflow-hidden flex-col justify-center h-min bg-red-200 rounded-2xl">
    <div className="flex overflow-hidden flex-col justify-center h-min rounded-2xl">
      <img src={url} alt={title} />
      <p className="p-2 font-bold text-center bg-white sm:text-sm md:p-4 md:text-lg">
        {title}
      </p>
    </div>
  )
}
