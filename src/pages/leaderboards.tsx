import { useState } from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { leaderboards } from '@/data/leaderboard'

function Leaderboards() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof leaderboards>('Tekken 8')
  const [sortConfig, setSortConfig] = useState<{
    key: keyof (typeof leaderboards)[keyof typeof leaderboards][number] | 'rank'
    order: 'asc' | 'desc'
  }>({
    key: 'winRate',
    order: 'desc',
  })

  const handleActiveTab = (tab: keyof typeof leaderboards) => {
    setActiveTab(tab)
    console.log(tab)
  }

  return (
    <div className="overflow-hidden p-2 lg:p-10">
      <div className="grid grid-cols-[18%_auto] auto-rows-auto">
        {/* LEFT SIDEBAR  */}
        <div className="hidden lg:block border-[.01rem] border-white/20 shadow-2xl rounded-xl w-full col-span-1 row-span-2 h-152">
          {/* LOGO */}
          <div className="border-b border-white/20 shadow-2xs h-30 flex items-center justify-center">
            <h1 className="uppercase text-center leading-tight">
              <span className="font-bold text-2xl">Highnoon</span> <br />
              <span className="font-normal tracking-wide">Gaming</span>
            </h1>
          </div>

          {/* TABS */}
          <div className="px-3 py-6">
            {Object.keys(leaderboards).map((leaderboard) => (
              <p
                onClick={() =>
                  handleActiveTab(leaderboard as keyof typeof leaderboards)
                }
                key={leaderboard}
                className={`p-2 text-sm ${leaderboard === activeTab ? 'text-cinnabar font-bold' : ''} hover:text-cinnabar cursor-pointer transition-colors duration-200`}
              >
                {leaderboard}
              </p>
            ))}
          </div>
        </div>

        {/* MOBILE | TABLET */}
        <div className="lg:hidden m-2 col-span-2  border-[.01rem] border-white/20 p-1 rounded-lg">
          <select
            name="game"
            className="outline-0 w-full p-2"
            value={activeTab}
            onChange={(e) =>
              handleActiveTab(e.target.value as keyof typeof leaderboards)
            }
          >
            {Object.keys(leaderboards).map((leaderboard) => (
              <option
                value={leaderboard}
                key={leaderboard}
                onChange={() =>
                  handleActiveTab(leaderboard as keyof typeof leaderboards)
                }
              >
                {leaderboard}
              </option>
            ))}
          </select>
        </div>

        {/* RIGHT | BOTTOM */}
        <div className="rounded-lg md:px-4 md:mx-4 lg:mx-0 flex flex-col gap-5 col-span-2 lg:w-full lg:col-span-1">
          <p className="font-oswald font-bold text-xl tracking-wide uppercase p-2 lg:p-0">
            Leaderboard : {activeTab}
          </p>

          {/* LEADERBOARD */}
          <div className="border border-white/10 shadow-sm rounded-lg overflow-hidden">
            <div className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] text-sm">
              {/* HEADER ROW */}
              {['Rank', 'Name', 'Team', 'Wins', 'Losses', 'WinRate'].map(
                (label, i) => {
                  const keyMap: Record<string, string> = {
                    Rank: 'rank',
                    Name: 'name',
                    Team: 'team',
                    Wins: 'wins',
                    Losses: 'losses',
                    WinRate: 'winRate',
                  }

                  const sortKey = keyMap[label]
                  const sortable = ['Wins', 'WinRate'].includes(label)

                  return (
                    <div
                      key={i}
                      onClick={() => {
                        if (!sortable) return
                        setSortConfig((prev) =>
                          prev.key === sortKey
                            ? {
                                ...prev,
                                order: prev.order === 'asc' ? 'desc' : 'asc',
                              }
                            : { key: sortKey as any, order: 'desc' },
                        )
                      }}
                      className={`flex items-center justify-center gap-1 bg-darkGray text-[10px] lg:text-sm text-white font-semibold py-2 border-b shadow-xs border-white/10 sticky top-0 z-10 ${
                        sortable ? 'cursor-pointer hover:text-cinnabar' : ''
                      }`}
                    >
                      {label}
                      {sortable && (
                        <ChevronsUpDown
                          className={`h-2 w-2 md:h-3.5 md:w-3.5 transition-transform ${
                            sortConfig.key === sortKey &&
                            sortConfig.order === 'asc'
                              ? 'rotate-180 text-cinnabar'
                              : sortConfig.key === sortKey
                                ? 'text-cinnabar'
                                : ''
                          }`}
                        />
                      )}
                    </div>
                  )
                },
              )}
            </div>

            {/* BODY */}
            <div className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] text-sm">
              {leaderboards[activeTab]
                .map((player) => {
                  const winRate = Math.round(
                    (player.wins / (player.wins + player.losses)) * 100,
                  )
                  return { ...player, winRate }
                })
                .sort((a, b) => {
                  const { key, order } = sortConfig

                  const valA = a[key]
                  const valB = b[key]

                  if (typeof valA === 'string' && typeof valB === 'string') {
                    const result = valA.localeCompare(valB)
                    return order === 'asc' ? result : -result
                  }

                  if (typeof valA === 'number' && typeof valB === 'number') {
                    const result = valA - valB
                    return order === 'asc' ? result : -result
                  }

                  return 0
                })
                .map((player, index) => {
                  const labelData = [
                    (player.rank = index + 1),
                    player.name,
                    player.team,
                    player.wins,
                    player.losses,
                    player.winRate,
                  ]

                  return labelData.map((label, i) => (
                    <div
                      key={`${player.name}-${i}`}
                      className={`flex items-center justify-center py-2 border-b border-white/10 text-[10px] lg:text-sm ${
                        i === 0 && player.rank === 1
                          ? 'text-cinnabar font-bold'
                          : ''
                      }`}
                    >
                      {label === player.winRate
                        ? `${label}%`
                        : label === player.rank
                          ? `[ ${label} ]`
                          : label}
                    </div>
                  ))
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboards
