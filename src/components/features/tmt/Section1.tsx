import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans font-[650]'> <span className="text-[#F98D1B]"> Trusted TMT (Treadmill) </span> <br /> Tests for Accurate Heart Diagnostics</span>,
        subtitle: <span className="text-[#1E1E1E] font-sans font-medium">A Treadmill Test (TMT) is a controlled exercise-based <br /> assessment that helps evaluate how your heart responds <br /> to physical stress. It is a non-invasive test used to detect <br /> heart-related issues, monitor blood flow, and assess <br /> overall cardiac fitness.</span>,
        image: "/images/tmt/section1/tmt-banner-img.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="TMT" />
}

export default Section1