import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans font-[650] text-white'>Smart Digital <br /> Mammograms for <br /> Clear Results</span>,
        subtitle: <span className="text-[#1E1E1E] font-secondary font-medium text-white">Utilizing advanced digital imaging technology to <br /> deliver precise visuals that support confident, <br /> informed clinical decisions.</span>,
        image: "/images/mammoograms/section1/banner.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="Mammograms" />
}

export default Section1