import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans font-[650]'>Trusted <span className="text-[#F98D1B]"> ECHO Echocardiogram  </span> <br /> Tests for Accurate Heart  <br /> Diagnostics</span>,
        subtitle: <span className="text-[#1E1E1E] font-secondary font-medium">Gain detailed insights into your heart&apos;s structure and <br /> function with our advanced echocardiography performed <br /> by certified cardiac specialists.</span>,
        image: "/images/echo/section1/banner-echo.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="ECHO" />
}

export default Section1