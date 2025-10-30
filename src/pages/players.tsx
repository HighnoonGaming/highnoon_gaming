import { players } from '@/data/players'

function Players() {
  return (
    <div className="py-10 px-20 ">
      <div className="grid grid-cols-4 gap-6">
        {players.map((player, index) => (
          <div key={index} className="group w-full h-120 perspective-[1000px]">
            {/* CARD WRAPPER */}
            <div className="relative min-w-80 w-full h-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
              {/* FRONT */}
              <div className="p-5 absolute inset-0 rounded-xl overflow-hidden backface-hidden bg-darkGray border border-gray-700">
                <div className="relative border-6 h-full rounded-xl overflow-hidden border-white">
                  <img
                    src={player.img}
                    alt={player.firstName + player.lastName}
                    className="w-full h-full object-cover opacity-90"
                  />

                  <div className="absolute top-0 h-full w-full bg-black/30"></div>

                  <div className="absolute right-0 top-45 flex flex-col items-center justify-center px-5">
                    <p className="font-bold text-4xl text-white">
                      {player.firstName}
                    </p>
                    <p className="font-bold text-4xl text-white">
                      {player.lastName}
                    </p>
                  </div>

                  <div className="absolute bottom-2 left-0 bg-white z-10 rounded-full h-35 w-35 p-3 flex items-center justify-center">
                    <div className="rounded-full h-full w-full bg-oxfordBlue z-20 flex items-center justify-center p-3">
                      <p className="font-semibold text-sm text-center wrap-break-word w-full">
                        {player.team}
                        {/* {index < 9 ? `0${index + 1}` : index + 1} */}
                      </p>
                    </div>
                  </div>

                  <div className="h-25 w-full bg-white absolute bottom-0 rounded-tr-4xl flex items-center justify-end">
                    <div className="w-30 flex flex-col gap-1">
                      <p className="text-oxfordBlue uppercase font-semibold text-[13px]">
                        IGN:
                      </p>
                      <p className="text-oxfordBlue uppercase font-bold text-sm">
                        {player.ign}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="overflow-hidden absolute inset-0 rounded-xl bg-darkGray border border-gray-700 backface-hidden transform-[rotateY(180deg)]">
                <div className="ml-4 mt-10 flex flex-col gap-4">
                  <div className="">
                    <span className="flex gap-2 text-white text-sm">
                      {player.firstName} {player.lastName}
                    </span>
                    <p className="font-medium uppercase tracking-wider text-2xl font-oswald">{`"${player.ign}"`}</p>
                  </div>

                  <p>{player.bio}</p>
                </div>

                <div className="h-[55%] w-full rounded-tr-[4rem] bg-white absolute bottom-0 p-3">
                  <p className="text-2xl text-oxfordBlue font-bold uppercase font-oswald">
                    Player Info
                  </p>

                  <div className="text-oxfordBlue grid grid-cols-2 mt-5 gap-2">
                    {[
                      { label: 'Wins', value: player.wins },
                      { label: 'Losses', value: player.losses },
                      {
                        label: 'Tournament Wins',
                        value: player.tournamentWins,
                      },
                      {
                        label: 'W/L',
                        value: `${(player.wins / player.losses).toFixed(2)}%`,
                      },
                      {
                        label: 'Games',
                        value: player.games.join(', '),
                      },
                    ].map((item, i, arr) => (
                      <div
                        key={i}
                        className={`${i === arr.length - 1 ? 'col-span-2' : ''}`}
                      >
                        <p className="text-sm font-semibold">{item.label}</p>
                        {item.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Players
