import { useEffect } from 'react'
import { Logo } from 'components/common'
import { motion, useAnimation } from 'framer-motion'

export const Top = () => {
  const coverControl = useAnimation()
  useEffect(() => {
    const animateInitialEffect = async () => {
      await coverControl.start('end')
    }
    animateInitialEffect()
  }, [])
  return (
    <>
      <motion.div
        className="bg-black fixed w-full bottom-0"
        initial="start"
        variants={{
          start: { height: '100vh' },
          middle: { height: '60vh' },
          end: { height: '0' },
        }}
        transition={{ duration: 2 }}
        animate={coverControl}
      />
      <div className="h-screen flex flex-col">
        <header className="pt-12 px-20">
          <Logo />
        </header>
        <main className="flex-1 flex flex-col">
          <section className="flex-1 flex flex-col justify-between">
            <div className="pt-16 px-20">
              <h2 className="text-6xl">
                <span className="static z-50">keep visions accelerate.</span>
              </h2>
              <p className="text-3xl mt-8 underline cursor-pointer">
                more about us
              </p>
            </div>
            <ul className="flex">
              <li className="bg-red-500 min-h-[60vh] w-full flex justify-end p-4 items-end">
                <p className="text-4xl font-semibold text-white underline cursor-pointer">
                  activities
                </p>
              </li>
              <li className="bg-sky-500 min-h-[60vh] w-full flex justify-end p-4 items-end">
                <p className="text-4xl font-semibold text-white underline cursor-pointer">
                  members
                </p>
              </li>
              <li className="bg-green-500 min-h-[60vh] w-full flex justify-end p-4 items-end">
                <p className="text-3xl font-semibold text-white underline cursor-pointer">
                  contacts
                </p>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  )
}
