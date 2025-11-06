import { useState } from 'react'
import { Angry, Smile } from 'lucide-react'
import type { ChangeEvent, FormEvent } from 'react'

type formProps = {
  fullName?: string
  title?: string
  message?: string
}

function Contact({ fullName = '', title = '', message = '' }: formProps) {
  const [formData, setFormData] = useState({
    fullName,
    title,
    message,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('Form submitted:', formData)
    setFormData({
      fullName: '',
      title: '',
      message: '',
    })
  }

  return (
    <div className="p-10 lg:p-2 flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-80px)] w-full">
      {/* LOGO */}
      <div className="h-30 md:h-[40%] lg:h-[90%] w-full lg:w-1/3 bg-oxfordBlue shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-transparent rounded-t-lg lg:rounded-l-lg flex flex-col gap-2 items-center justify-center">
        <p className="uppercase font-oswald text-2xl md:text-7xl text-white font-bold">
          Highnoon
        </p>
        <p className="uppercase font-oswald md:text-5xl text-white font-bold tracking-widest">
          Gaming
        </p>
      </div>

      {/* FORM */}
      <form
        action={''}
        method=""
        onSubmit={handleSubmit}
        className={`not-lg:grow lg:h-[90%] w-full lg:w-1/3 rounded-b-lg lg:rounded-r-lg flex flex-col p-5 gap-5 bg-cinnabar`}
      >
        {/* NAME */}
        <div className="relative z-10">
          <p className="uppercase text-sm">Name:</p>
          <input
            type="text"
            name="fullName"
            className={`w-full h-12 rounded-lg pl-2 outline-0 mt-2 bg-white text-oxfordBlue`}
            value={formData.fullName}
            onChange={handleChange}
          />
          <div
            className={`-z-10 absolute right-2 transition-all duration-500 ease-in-out ${formData.fullName.length > 0 ? 'top-1 opacity-100' : 'top-10 opacity-0'}`}
          >
            {formData.fullName.length === 0 ? (
              ''
            ) : formData.fullName.length > 0 && formData.fullName.length < 5 ? (
              <Angry className="h-8 w-8 text-oxfordBlue" />
            ) : (
              <Smile className="h-8 w-8 text-green-500" />
            )}
          </div>
        </div>

        {/* TITLE */}
        <div className="relative z-10">
          <p className="uppercase text-sm">Title:</p>
          <input
            type="text"
            name="title"
            className={`w-full h-12 rounded-lg pl-2 outline-0 mt-2 bg-white text-oxfordBlue`}
            value={formData.title}
            onChange={handleChange}
          />
          <div
            className={`-z-10 absolute right-2 transition-all duration-500 ease-in-out ${formData.fullName.length > 0 ? 'top-1 opacity-100' : 'top-10 opacity-0'}`}
          >
            {formData.title.length === 0 ? (
              ''
            ) : formData.title.length > 0 && formData.title.length < 5 ? (
              <Angry className="h-8 w-8 text-oxfordBlue" />
            ) : (
              <Smile className="h-8 w-8 text-green-500" />
            )}
          </div>
        </div>

        {/* MESSAGE */}
        <div className="relative z-10">
          <p className="uppercase text-sm">Message:</p>
          <textarea
            name="message"
            className={`w-full min-h-32 max-h-60 resize-none rounded-lg pl-2 pt-2 outline-0 mt-2 bg-white text-oxfordBlue`}
            value={formData.message}
            onChange={handleChange}
          />
          <div
            className={`-z-10 absolute right-2 transition-all duration-500 ease-in-out ${formData.message.length > 0 ? 'top-1 opacity-100' : 'top-10 opacity-0'}`}
          >
            {formData.message.length === 0 ? (
              ''
            ) : formData.message.length > 0 && formData.message.length < 10 ? (
              <Angry className="h-8 w-8 text-oxfordBlue" />
            ) : (
              <Smile className="h-8 w-8 text-green-500" />
            )}
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="px-10 py-3 bg-oxfordBlue text-white uppercase tracking-wide font-bold rounded-lg self-start"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
