import { useState } from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { leaderboards } from '@/data/leaderboard'
import SearchBar from '@/hooks/searchBar'

function Leaderboards() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof leaderboards>('Tekken 8')

  const handleActiveTab = (tab: keyof typeof leaderboards) => {
    setActiveTab(tab)
    console.log(tab)
  }

  return (
    <div className="overflow-hidden p-2 lg:p-10 ">
      <div className="grid grid-cols-[18%_auto] auto-rows-auto gap-4">
        {/* LEFT SIDEBAR  */}
        <div className="hidden lg:block border-[.01rem] border-white/20 shadow-2xl rounded-xl w-full col-span-1 row-span-8 overflow-y-auto">
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

        {/* TOP */}
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

        {/* RIGHT TOP | MIDDLE */}
        <div className="col-span-2 lg:col-span-1">
          <SearchBar
            showIcon={true}
            placeholder="Search Player..."
            padding="p-4"
          />
        </div>

        {/* RIGHT BOTTOM | BOTTOM */}
        <div className="rounded-lg md:p-4 md:mx-4 lg:mx-0 flex flex-col gap-5 col-span-2 lg:w-full lg:col-span-1 ">
          <p className="font-oswald font-bold text-xl tracking-wide uppercase p-2">
            Leaderboard : {activeTab}
          </p>

          {/* LEADERBOARD */}
          <div className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr] text-sm border border-white/10 shadow-sm rounded-lg overflow-hidden">
            {/* HEADER ROW */}
            {['Rank', 'Name', 'Team', 'Wins', 'Losses', 'WinRate'].map(
              (label, i) => (
                <button
                  key={i}
                  className="flex items-center justify-center gap-1 bg-darkGray text-[10px] lg:text-sm text-white font-semibold py-2 border-b shadow-xs border-white/10"
                >
                  {label}
                  <ChevronsUpDown className="h-2 w-2 md:h-3.5 md:w-3.5" />
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
                  className={`flex items-center justify-center py-2 border-b border-white/10 text-[10px] lg:text-sm ${i === 0 && player.rank === 1 ? 'text-cinnabar font-bold' : ''}`}
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
