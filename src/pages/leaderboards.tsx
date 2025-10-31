import { useState } from 'react'
import { ChevronsUpDown, Search } from 'lucide-react'
import { leaderboards } from '@/data/leaderboard'

function Leaderboards() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof leaderboards>('Tekken 8')

  const handleActiveTab = (tab: keyof typeof leaderboards) => {
    setActiveTab(tab)
    console.log(tab)
  }

  return (
    <div className="p-10">
      <div className="grid grid-cols-[18%_auto] auto-rows-auto gap-4">
        {/* LEFT SIDEBAR */}
        <div className="border-[.01rem] border-white/20 shadow-2xl rounded-xl row-span-8 overflow-y-auto">
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

        {/* RIGHT TOP */}
        <div className="rounded-lg p-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search player..."
            className="bg-transparent border border-white/30 shadow-sm rounded-lg px-3 py-2 text-sm focus:outline-none w-full"
          />
          <button className="px-3 py-2 bg-cinnabar rounded-lg text-sm font-semibold text-white hover:bg-cinnabar/80 transition duration-300">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* RIGHT BOTTOM */}
        <div className="rounded-lg p-4 flex flex-col gap-5">
          <p className="font-oswald font-bold text-xl tracking-wide uppercase">
            Leaderboard : {activeTab}
          </p>

          {/* LEADERBOARD */}
          <div className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] text-sm border border-white/10 shadow-sm rounded-lg overflow-hidden">
            {/* HEADER ROW */}
            {['Rank', 'Name', 'Team', 'Wins', 'Losses', 'WinRate'].map(
              (label, i) => (
                <button
                  key={i}
                  className="flex items-center justify-center gap-1 bg-darkGray text-white font-semibold py-2 border-b shadow-xs border-white/10"
                >
                  {label}
                  <ChevronsUpDown className="h-3.5 w-3.5" />
                </button>
              ),
            )}

            {/* PLAYER ROWS */}
            {leaderboards[activeTab].map((player) => {
              const winRate = Math.round(
                (player.wins / (player.wins + player.losses)) * 100,
              )

              return [
                player.rank,
                player.name,
                player.team,
                player.wins,
                player.losses,
                (player.winRate = winRate),
              ].map((label, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center py-2 border-b border-white/10 ${i === 0 && player.rank === 1 ? 'text-cinnabar font-bold' : ''}`}
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
  )
}

export default Leaderboards
