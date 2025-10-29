import { useEffect } from 'react'
import { X } from 'lucide-react'

type imageModalProps = {
  image: string
  closeModal: () => void
}

function GalleryModal({ image, closeModal }: imageModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 o h-screen w-full flex items-center justify-center">
      <div className="bg-black/90 h-full w-full absolute top-0 left-0"></div>

      <X
        className="absolute z-20 top-10 right-10 text-white hover:cursor-pointer h-10 w-10"
        onClick={closeModal}
      />

      <div className="h-2/3 w-2/3 z-20">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

export default GalleryModal
