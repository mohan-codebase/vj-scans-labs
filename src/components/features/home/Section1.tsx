import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <>Your <span className="text-[#F98D1B] md:text-[#F98D1B] text-white">Health Journey,</span> <span className="text-white">Empowered by Advanced Diagnostics</span></>,
        subtitle: <><span className="text-white font-sans font-medium">Reliable results, individualized care, and prompt <br /> insights for better health.</span></>,
        image: "/images/Section1/banner-img-1-by-vj.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    },
    {
        id: 2,
        title: <>Feeling feverish? <br />   Receive your reports <br /> <span className="text-[#F98D1B]">within 6 hours</span></>,
        subtitle: <><span className="text-[#1E1E1E] font-sans font-medium">Reliable results, individualized care, and prompt <br /> insights for better health.</span></>,
        image: "/images/Section1/banner-img-2-by-vj.avif",
        mobileImage: "/images/Section1/mobileBanner-img-2-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E0F7FA] via-[#E0F2F1] to-[#E8F5E9]"
    },
    {
        id: 3,
        title: <>Need a sample<span className="text-[#F98D1B]"> test?</span> <br /> Home sample collection <br />  within <span className="text-[#F98D1B]">60 minutes</span></>,
        subtitle: <><span className="text-[#1E1E1E] font-sans font-medium">Reliable results, individualized care, and prompt <br /> insights for better health.</span></>,
        image: "/images/Section1/banner-img-3-by-vj.avif",
        mobileImage: "/images/Section1/mobileBanner-img-3-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#F3E5F5] via-[#FCE4EC] to-[#FFF3E0]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="Home" videoSrc="/video/optimized.webm" />
}

export default Section1