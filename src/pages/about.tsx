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
    <div className="flex flex-col py-15 overflow-x-hidden">
      {/* TOP */}
      <div className="overflow-hidden h-140 md:h-150 lg:h-170 relative flex flex-col items-center justify-center">
        <h1 className="absolute -top-62 -left-180 text-[35rem] md:text-[40rem] lg:text-[44rem] text-amber uppercase font-bold whitespace-nowrap">
          Highnoon Gaming
        </h1>

        <div className="relative lg:h-1/2 w-[80%] md:w-1/2 lg:w-1/3 bg-white z-20">
          <img
            src={img9}
            alt="some image"
            className="object-cover grayscale-100 h-full w-full"
          />
        </div>

        <div className="absolute px-2 bottom-0 w-full flex flex-col md:flex-row justify-between not-lg:gap-5 mt-2">
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
      <div className="h-[50vh] md:h-[70vh] lg:h-screen flex items-center justify-center md:px-10 lg:px-25">
        <p className="relative font-semibold font-oswald uppercase text-center sm:text-xl md:text-3xl lg:text-5xl tracking-widest leading-snug">
          <img
            src={img9}
            alt="Decorative element"
            className="float-right w-15 h-20 md:w-40 md:h-45 object-cover mr-10 grayscale-100 rounded-md"
          />

          {aboutUsText}
        </p>
      </div>

      {/* BOTTOM */}
      <div className="h-screen flex justify-center relative">
        <p className="absolute -top-30 font-oswald font-bold text-white/10 uppercase tracking-wide text-[25rem]">
          About
        </p>

        <p className="text-4xl md:text-7xl uppercase font-bold top-7 relative">
          {startOfUs}
        </p>

        <div className="w-full lg:h-full flex flex-col lg:flex-row justify-between items-center lg:items-end absolute bottom-0 gap-5 lg:gap-2 px-10">
          <div className="md:h-90 lg:h-[50vh] lg:grow bg-white">
            <img
              src={img9}
              alt="some image"
              className="object-cover grayscale-100 h-full w-full"
            />
          </div>

          <p className="text-sm md:text-md text-center md:w-150">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            consectetur, consequatur fugit a corporis non harum suscipit
            laboriosam vitae nisi sit at optio, facere itaque dolore doloremque
            sed. Quis, dignissimos. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo molestiae facilis sint reprehenderit a,
            cupiditate aut ullam similique tenetur mollitia molestias! Sit ipsum
            fuga optio rem nisi saepe eveniet porro!
          </p>

          <div className="md:h-90 lg:h-[50vh] grow bg-white">
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
