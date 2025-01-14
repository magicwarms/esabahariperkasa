import React, { forwardRef, useContext } from 'react'
import { Helmet } from 'react-helmet'
import BRAND_META_TITLE from '../constants/brand.constant'
import Navbar from '../components/Navbar'
import ArrowBtn from '../components/svg/ArrowBtn'
import { motion } from 'framer-motion'
import twcolor from 'tailwindcss/colors'
import BrandComp from '../components/BrandComp'
import Brand from '../components/svg/Brand'
import { Swiper, SwiperSlide } from 'swiper/react';
import withMainContext, { MainContext } from '../context/Main.context'
import { useState } from 'react'
import { useEffect } from 'react'
import useLoadHandler from '../hooks/useLoad'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'


const DELAY = .5 * 2 + .8

const HomePage = () => {
  const [isDomLoaded, setIsDomLoaded] = useState(true) //  change to true
  const { onLoad, percentage, ref } = useLoadHandler()
  const [isLoading, setIsLoading] = useState(true)
  const services = [
    { id: 1, title: "Our Services", buttonText: "See All Services", bgImage: "https://source.unsplash.com/random/hero_1", child: "Despite the size and diversity of our services, our simple, effective, people focused approach never waivers.", },
    { id: 2, title: "About", buttonText: "More About Us", bgImage: "https://source.unsplash.com/random/hero_2", child: "A World Leading Shipping and Logistics Company" },
    { id: 3, title: "Contact", buttonText: "Contact Us", bgImage: "https://source.unsplash.com/random/hero_3", child: "Looking for an International container shipping companies to deliver your container?", }
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDomLoaded(false)
      window.scrollTo({ behavior: "auto", top: 0 })
      window.document.body.classList.add("overflow-hidden")
    }
  }, [])

  useEffect(() => {
    if (isDomLoaded) {
      setTimeout(() => {
        window.document.body.classList.remove("overflow-hidden")
      }, DELAY * 1000)
    }
  }, [isDomLoaded])

  useEffect(() => {
    if (percentage >= 100) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }, [percentage])



  return (
    <React.Fragment>
      <Helmet>
        <title>{BRAND_META_TITLE}</title>
      </Helmet>
      <Navbar />
      {isDomLoaded && <Loader />}
      {/* {isLoading && <Loader percentage={percentage} />} */}

      <main className=''>
        <Overlay className="bg-black">
          <div className='laptop:container mx-auto laptop:pt-44  mobile:pt-36 laptop:block mobile:px-4 laptop:px-0 relative bg-black' style={{
            zIndex: 1,
            mixBlendMode: "screen",
          }}>
            <div className='flex flex-col w-full h-full' >
              <div className='flex flex-col laptop:text-6xl mobile:text-2xl font-bold gap-y-3 '
              >
                <div className='overflow-hidden'>
                  <motion.h1
                    className='text-white'
                    initial={{
                      y: 100,
                    }}
                    animate={{
                      y: 0,
                    }}
                    transition={{
                      duration: .6
                    }}
                  >
                    Reliable & Express Logistic
                  </motion.h1>
                </div>
                <div className='overflow-hidden'>
                  <motion.h1
                    className='text-white'
                    initial={{
                      y: 100,
                    }}
                    animate={{
                      y: 0,
                    }}
                    transition={{
                      duration: .6,
                      delay: .15
                    }}
                  >
                    Solution to save your Time!
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </Overlay>

        <section data-id="hero" className='laptop:container mx-auto h-[50vh] laptop:pt-44  mobile:pt-36 laptop:block mobile:px-4 laptop:px-0 bg-white relative'
          style={{
            zIndex: 10
          }}
        >
          <div className='flex flex-col'>
            <div className='flex flex-col laptop:text-6xl mobile:text-2xl font-bold gap-y-3 '
            >
              <div className='overflow-hidden'>
                <h1
                  className='text-black'
                  style={{
                  }}
                >
                  Reliable & Express Logistic
                </h1>
              </div>
              <div className='overflow-hidden '>
                <h1
                  className='text-black '
                >
                  Solution to save your Time!
                </h1>
              </div>
            </div>
            <div className='mobile:pt-20 laptop:pt-0'>
              <ButtonArrow color={twcolor.neutral[800]} text={"More Info"} />
            </div>
          </div>
        </section>

        <section className='w-full flex laptop:flex-row mobile:flex-col h-auto'>
          {services.map((item, _index) => (
            <CardFeature
              id={item.id}
              key={`hero-${_index}`}
              buttonText={item.buttonText}
              bgImage={item.bgImage}
              title={item.title}
              ref={ref}
              onLoad={onLoad}
            >
              {item.child}
            </CardFeature>
          ))}
        </section>


        <section className=''>
          <div className='laptop:grid laptop:grid-cols-12 laptop:container mx-auto laptop:py-20 mobile:py-10 gap-x-5 mobile:px-4 laptop:px-0'>
            <img src={`https://source.unsplash.com/random/2`} className='col-span-6 h-[920px] bg-cover w-full mobile:hidden object-cover laptop:block' alt='about' />
            <div className='col-span-6 py-10 '>
              <div className='flex flex-col laptop:gap-y-6 mobile:gap-y-1 laptop:text-6xl font-bold text-neutral-800 mobile:text-2xl'>
                <h1>Profesional</h1>
                <h1>Shipping Agency </h1>
                <h1>With Affordable Price,</h1>
                <h1>And Certified Forwader</h1>
              </div>
              <div className='laptop:mt-72 mobile:hidden laptop:block'>
                <ButtonArrow color={twcolor.neutral[800]} text={"More About Us"} />
              </div>
            </div>
            <div className=' laptop:block laptop:absolute w-full laptop:mt-[400px]'>
              <div className='laptop:grid grid-cols-6 content-center w-full'>
                <div className="col-start-2 col-span-3 bg-white laptop:p-9 flex flex-col gap-y-6">
                  <div className='mobile:hidden laptop:block'>
                    <BrandComp />
                  </div>
                  <div className='laptop:hidden mobile:block'>
                    <div data-id="brand" className='flex gap-x-4 items-center text-xl font-medium text-neutral-800'>
                      <Brand fill={twcolor.neutral[800]}
                        className='w-14 h-14'
                      />
                      <div className='flex-col flex'>
                        <span>
                          Esa Bahari
                        </span>
                        <span>
                          Perkasa
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className='text-lg'>
                    Since starting our operations in Indonesia in <b><i>"date"</i></b>, PT Esa Bahari Perkasa has established a strong foothold in the local shipping and logistics industries through our partnership with two long-standing alliances.
                  </p>
                </div>
              </div>
            </div>
            <div className='laptop:hidden mobile:block mobile:pt-6'>
              <ButtonArrow color={twcolor.neutral[800]} text={"More About Us"} />
            </div>
          </div>
        </section>

        <section className='mobile:'>
          <div className='mobile:px-4 mobile:py-10 laptop:py-0 laptop:px-0 laptop:container mx-auto laptop:grid grid-cols-12'>
            <div className='col-span-6 flex flex-col gap-y-8'>
              <div className='flex flex-col gap-y-3'>
                <h1 className='laptop:text-6xl font-bold text-neutral-800 mobile:text-2xl'>What we do?</h1>
                <p className='laptop:text-lg'>
                  We believes that it is essential to act with integrity in all its activities, to treat all its employees and customers in a fair and respectful manner. The company aims to remain the first choice of its customers.
                </p>
              </div>
              <div className='mobile:hidden laptop:block'>
                <ButtonArrow color={twcolor.neutral[800]} text={"All services"} />
              </div>
            </div>
          </div>
          <div className='laptop:mt-10'>
            <ListServices />
            <div className='laptop:hidden mobile:px-4 laptop:px-0 mx-auto mt-8'>
              <ButtonArrow color={twcolor.neutral[800]} text={"All services"} />
            </div>
          </div>
        </section>
        <section>
          <div className="h-screen bg-cover w-full" style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(https://source.unsplash.com/random/gradient_1)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <div className='flex justify-center items-center flex-col h-full w-full tracking-widest text-white font-bold laptop:text-9xl mobile:text-4xl' style={{
              WebkitTextStroke: "3px",
              WebkitTextFillColor: "transparent"
            }}>
              <h1 className=''>ESA BAHARI</h1>
              <h1>PERKASA</h1>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}



const Loader = ({ percentage, ...props }) => {

  return (
    <div className='flex items-center justify-center text-white font-medium text-lg bg-black absolute w-screen h-screen' style={{ zIndex: 99 }}>
      Loading {percentage !== null ? `${percentage}%` : "..."}
    </div>
  )
}


const ButtonArrow = ({ text, color, ...props }) => {

  return (
    <div className='mobile:pt-0 laptop:pt-10 text-xl font-medium flex items-center gap-x-4'>
      <span style={{ color: color }}>{text}</span>
      <ArrowBtn fill={color} />
    </div>
  )
}


const ListServices = () => {
  const { breakpoint } = useContext(MainContext)
  const isMobile = (breakpoint === "mobile" || breakpoint === "tablet")
  const preview = isMobile ? 1.2 : 3
  const spaceBetween = isMobile ? 12 : 0

  const services = [
    { id: "1", title: "Ship Agency", },
    { id: "2", title: "Ship Chandler/Provision", },
    { id: "3", title: "Ship Chartering", },
  ]

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={preview}
      loop
      centeredSlides
      pagination={false}
    >
      {services.map((service, _index) => (
        <SwiperSlide key={_index}>
          <CardService id={service.id} title={service.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const CardService = ({ title, children, id, ...props }) => {

  return (
    <div className='w-full laptop:px-8 flex flex-col gap-y-4'>
      <img src={`https://source.unsplash.com/random/${id}`} className='bg-cover w-full h-[480px] object-cover' alt={title} />
      <span className='text-lg font-medium'>
        {title}
      </span>
    </div>
  )
}

const CardFeature = forwardRef(({ id, title, children, buttonText, onLoad, bgImage, ...props }, ref) => {
  return (
    <motion.div className={'w-full h-[50vh] object-cover bg-center relative overflow-hidden ' + props.className} >
      <motion.div className='bg-black absolute w-full h-full overflow-hidden'
        style={{
          zIndex: 5 * id
        }}
        animate={{
          width: 0,
        }}
        transition={{
          delay: DELAY + (.1 * id + .2),
          ease: "easeInOut",
          duration: .5,
        }}

      />
      <motion.img src={bgImage} className='object-cover w-full h-full object-center absolute'
        onLoad={onLoad}
        ref={ref}
        alt={title}
        initial={{
          scale: 1.3,
        }}
        animate={{
          scale: 1
        }}
        transition={{
          delay: DELAY + (.1 * id + .4),
          ease: "easeOut",
          duration: .3,
        }}
      />
      <div className='absolute overflow-hidden bg-neutral-800 w-full h-full bg-opacity-60 laptop:p-10 mobile:px-4 mobile:py-12 text-white flex flex-col laptop:justify-between laptop:gap-0 mobile:gap-y-8'>
        <div className='flex flex-col gap-y-3'>
          <span className='text-xl'>
            {title}
          </span>
          <span className='laptop:text-[32px] font-medium mobile:text-2xl mobile:leading-normal'>
            {children}
          </span>
        </div>
        <div className='flex gap-x-4 items-center'>
          <span className='text-xl font-medium'>
            {buttonText}
          </span>
          <ArrowBtn />
        </div>
      </div>
    </motion.div>
  )
})


export default withMainContext(HomePage)