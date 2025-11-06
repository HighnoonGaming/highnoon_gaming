import { Search } from 'lucide-react'

export interface searchBarProps {
  placeholder: string
  value?: string
  onChange?: () => void
  padding?: string
}

function SearchBar({ placeholder, value, onChange, padding }: searchBarProps) {
  return (
    <div className={`rounded-lg ${padding} flex items-center gap-2 w-full`}>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border border-white/30 shadow-sm rounded-lg px-3 py-2 text-sm focus:outline-none grow"
        value={value}
        onChange={onChange}
      />

      <button className="px-3 py-2 bg-cinnabar rounded-lg text-sm font-semibold text-white hover:bg-cinnabar/80 transition duration-300">
        <Search className="w-5 h-5" />
      </button>
    </div>
  )
}

export default SearchBar
