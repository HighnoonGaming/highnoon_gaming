import { useAppStore } from '@/store/store'

export interface MainButtonProps {
  text: string
  onClick: () => void
  textSize?: string
}

function MainButton({ text, onClick, textSize }: MainButtonProps) {
  const theme = useAppStore((s) => s.theme)

  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 border rounded-4xl overflow-hidden group self-start"
    >
      <div
        className={`backdrop absolute inset-0 ${theme === 'light' ? 'bg-oxfordBlue' : 'bg-white'} w-0 transition-all duration-700 ease-in-out group-hover:w-full`}
      ></div>

      <span
        className={`relative z-10 uppercase ${textSize} transition-colors duration-700 ease-in-out ${theme === 'light' ? 'group-hover:text-white' : 'group-hover:text-oxfordBlue'}`}
      >
        {text}
      </span>
    </button>
  )
}

export default MainButton
