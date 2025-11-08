// useFlags.ts
import { useEffect, useState } from 'react'

export function useFlags() {
  const [flags, setFlags] = useState<{ barbados: string; canada: string }>({
    barbados: '',
    canada: '',
  })

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const [barbadosRes, canadaRes] = await Promise.all([
          fetch(
            'https://restcountries.com/v3.1/name/barbados?fields=flags,name',
          ),
          fetch('https://restcountries.com/v3.1/name/canada?fields=flags,name'),
        ])
        const [barbadosData, canadaData] = await Promise.all([
          barbadosRes.json(),
          canadaRes.json(),
        ])
        setFlags({
          barbados: barbadosData[0].flags.svg,
          canada: canadaData[0].flags.svg,
        })
      } catch (err) {
        console.error('Error fetching flags:', err)
      }
    }

    fetchFlags()
  }, [])

  return flags
}
