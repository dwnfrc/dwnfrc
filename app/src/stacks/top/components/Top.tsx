import { useEffect, useState } from 'react'
import { Logo } from 'components/common'
import { motion, useAnimation, AnimationControls } from 'framer-motion'

const TopOverlayMotion = (props: {
  upperBoxControl: AnimationControls
  lowerBoxControl: AnimationControls
}) => {
  const { upperBoxControl, lowerBoxControl } = props
  const upperBoxPos = ['left-0', 'left-1/3', 'left-2/3']
  const lowerBoxPos = ['right-2/3', 'right-1/3', 'right-0']

  return (
    <div className="h-screen absolute w-full">
      <div className="h-[50vh] w-full flex relative">
        {[...Array(3).fill(0)].map((_v, i) => {
          return (
            <motion.div
              key={i}
              className={`w-1/3 h-full bg-black absolute ${upperBoxPos[i]} bottom-0`}
              animate={upperBoxControl}
              custom={i}
            />
          )
        })}
      </div>
      <div className="h-[50vh] w-full flex relative">
        {[...Array(3).fill(0)].map((_v, i) => {
          return (
            <motion.div
              key={i}
              className={`w-1/3 h-full bg-black absolute ${lowerBoxPos[i]} bottom-0`}
              animate={lowerBoxControl}
              custom={0}
            />
          )
        })}
      </div>
    </div>
  )
}

export const Top = () => {
  const [isTopOverlayAnimated, setIsTopOverlayAnimated] =
    useState<boolean>(false)

  const upperBoxControl = useAnimation()
  const lowerBoxControl = useAnimation()
  const catchTextControl = useAnimation()

  const actvitiesBoxControl = useAnimation()
  const membersBoxControl = useAnimation()
  const contactsBoxControl = useAnimation()

  useEffect(() => {
    const animateInitial = async () => {
      await catchTextControl.start((i) => {
        return {
          opacity: 1,
          transition: { delay: i * 0.1, duration: 0.4 },
        }
      })
      await upperBoxControl.start((i) => {
        return {
          height: 0,
          transition: { delay: i * 0.3, duration: 0.8 },
        }
      })
      await lowerBoxControl.start((i) => {
        return {
          width: 0,
          transition: { delay: i * 0.3, duration: 0.8 },
        }
      })
      setIsTopOverlayAnimated(true)
    }
    animateInitial()
  }, [])

  useEffect(() => {
    const initiateSectionBoxBg = async () => {
      actvitiesBoxControl.start(() => {
        return {
          backgroundImage: `
          radial-gradient(at 50% 91%, hsla(164,64%,67%,1) 0, transparent 50%),
          radial-gradient(at 20% 23%, hsla(123,75%,77%,1) 0, transparent 43%),
          radial-gradient(at 79% 34%, hsla(208,72%,66%,1) 0, transparent 41%)`,
        }
      })
      membersBoxControl.start(() => {
        return {
          backgroundImage: `
          radial-gradient(at 50% 91%, hsla(80,68%,70%,1) 0, transparent 50%),
          radial-gradient(at 20% 23%, hsla(29,77%,60%,1) 0, transparent 43%),
          radial-gradient(at 79% 34%, hsla(29,65%,75%,1) 0, transparent 41%)`,
          transition: { duration: 1 },
        }
      })
      contactsBoxControl.start(() => {
        return {
          backgroundImage: `
          radial-gradient(at 84% 19%, hsla(124,92%,59%,1) 0, transparent 50%),
          radial-gradient(at 21% 72%, hsla(338,57%,64%,1) 0, transparent 43%)`,
        }
      })
    }
    initiateSectionBoxBg()
  }, [])

  useEffect(() => {
    if (!isTopOverlayAnimated) return
    const animateSectionBoxBg = async () => {}
    animateSectionBoxBg()
  }, [isTopOverlayAnimated])

  return (
    <>
      {!isTopOverlayAnimated && (
        <TopOverlayMotion
          upperBoxControl={upperBoxControl}
          lowerBoxControl={lowerBoxControl}
        />
      )}

      <div className="h-screen flex flex-col">
        <header className="px-20 fixed w-full top-8">
          <Logo />
        </header>
        <main className="flex-1 flex flex-col">
          <section className="flex-1 flex flex-col justify-between">
            <div className="px-20 bg-white min-h-[50vh] flex flex-col justify-center">
              <h2 className="text-6xl mix-blend-difference text-white">
                {'keep visions accelerate.'.split('').map((v, i) => (
                  <motion.span
                    key={i}
                    className="opacity-0"
                    animate={catchTextControl}
                    custom={i}
                  >
                    {v}
                  </motion.span>
                ))}
              </h2>
              <p className="text-3xl mt-8 underline cursor-pointer self-start">
                more about us
              </p>
            </div>
            <ul className="flex">
              <motion.li
                className="bg-black min-h-[50vh] w-full flex justify-end p-4 items-end"
                animate={actvitiesBoxControl}
              >
                <p className="text-4xl font-semibold text-white underline cursor-pointer">
                  activities
                </p>
              </motion.li>
              <motion.li
                className="bg-black min-h-[50vh] w-full flex justify-end p-4 items-end"
                animate={membersBoxControl}
              >
                <p className="text-4xl font-semibold text-white underline cursor-pointer">
                  members
                </p>
              </motion.li>
              <motion.li
                className="bg-black min-h-[50vh] w-full flex justify-end p-4 items-end"
                animate={contactsBoxControl}
              >
                <p className="text-3xl font-semibold text-white underline cursor-pointer">
                  contacts
                </p>
              </motion.li>
            </ul>
          </section>
        </main>
      </div>
    </>
  )
}
