import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans font-[650] text-white'>Advanced <span className="text-[#F98D1B]">CT Scan</span> <br /> Services for Accurate <br /> & Fast Diagnosis</span>,
        subtitle: <span className="font-secondary font-medium text-white">Reliable results, individualized care, and prompt <br /> insights for better health.</span>,
        image: "/images/ctscan/section1/ctscan-banner.png",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="CT Scan" />
}

export default Section1