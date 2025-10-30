import img9 from '@/assets/imgs/img9.jpg'

const About = () => {
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi et porro corrupti aut doloribus similique nisi? Voluptas fugit exercitationem libero magnam quod, aperiam neque dolorem repellendus? Quibusdam, quia commodi?'

  const startOfUsText = 'The Start Of Us'

  const aboutUsText = text.split(' ').map((word, index) => {
    const isFourth = (index + 1) % 4 === 0
    return (
      <span key={index} className={isFourth ? 'text-amber' : ''}>
        {word + ' '}
      </span>
    )
  })

  const startOfUs = startOfUsText.split(' ').map((word, index) => {
    const everyOther = (index + 1) % 2 === 0
    return (
      <span key={index} className={everyOther ? 'text-amber' : ''}>
        {word + ' '}
      </span>
    )
  })

  return (
    <div className="flex flex-col py-15">
      {/* TOP */}
      <div className="overflow-hidden h-170 relative flex flex-col items-center justify-center">
        <h1 className="absolute -top-62 -left-180 text-[44rem] text-amber uppercase font-bold whitespace-nowrap">
          Highnoon Gaming
        </h1>

        <div className="h-1/2 w-1/3 bg-white z-20">
          <img
            src={img9}
            alt="some image"
            className="object-cover grayscale-100 h-full w-full"
          />
        </div>

        <div className="absolute bottom-0 w-full flex justify-between mt-2">
          <p className="text-sm max-w-120">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            ipsum nisi consectetur quidem totam est animi delectus reiciendis!
          </p>

          <p className="text-sm max-w-120">
            Voluptate vitae laborum alias at consequatur quod numquam minus
            recusandae adipisci ex.
          </p>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="h-screen flex items-center justify-center px-25">
        <p className="relative font-semibold font-oswald uppercase text-center text-5xl tracking-widest leading-snug">
          <img
            src={img9}
            alt="Decorative element"
            className="float-right w-40 h-45 object-cover mr-10 grayscale-100 rounded-md"
          />

          {aboutUsText}
        </p>
      </div>

      {/* BOTTOM */}
      <div className="h-[80vh] flex justify-center relative">
        <p className="absolute -top-30 font-oswald font-bold text-white/10 uppercase tracking-wide text-[25rem]">
          About
        </p>

        <p className="text-7xl uppercase font-bold top-7 relative">
          {startOfUs}
        </p>

        <div className="w-full flex justify-between items-end absolute bottom-0 gap-2 px-10">
          <div className="h-[50vh] grow bg-white">
            <img
              src={img9}
              alt="some image"
              className="object-cover grayscale-100 h-full w-full"
            />
          </div>

          <p className="text-md text-center w-150">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            consectetur, consequatur fugit a corporis non harum suscipit
            laboriosam vitae nisi sit at optio, facere itaque dolore doloremque
            sed. Quis, dignissimos. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo molestiae facilis sint reprehenderit a,
            cupiditate aut ullam similique tenetur mollitia molestias! Sit ipsum
            fuga optio rem nisi saepe eveniet porro!
          </p>

          <div className="h-[50vh] grow bg-white">
            <img
              src={img9}
              alt="some image"
              className="object-cover grayscale-100 h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
