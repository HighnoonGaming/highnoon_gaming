import { useState } from 'react'
import image11 from '@/assets/imgs/img11.jpg'
import GalleryModal from '@/components/GalleryModal'

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="p-5">
      <h2 className="uppercase text-6xl font-bold tracking-wide">Gallery</h2>

      <div className="hover:cursor-pointer mt-8 grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] auto-rows-[12rem] gap-4 grid-flow-dense">
        {Array.from({ length: 30 }).map((_, i) => {
          const colSpan =
            i % 8 === 0 ? 'col-span-2' : i % 9 === 0 ? 'col-span-2' : ''
          const rowSpan =
            i % 4 === 0 ? 'row-span-2' : i % 11 === 0 ? 'row-span-2' : ''

          return (
            <div
              key={i}
              onClick={() => setIsModalOpen(true)}
              className={`hover:scale-103 transition duration-300 rounded-lg overflow-hidden bg-gray-800/40 ${colSpan} ${rowSpan}`}
            >
              <img
                src={image11}
                alt="random image"
                className="h-full w-full object-cover"
              />
            </div>
          )
        })}
      </div>

      {isModalOpen && (
        <GalleryModal
          image={image11}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default Gallery
