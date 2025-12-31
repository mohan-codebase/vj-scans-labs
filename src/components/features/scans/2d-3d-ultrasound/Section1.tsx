import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans font-[650]'>Expert <span className="text-[#F98D1B]"> 2D & 3D Ultrasound </span> <br /> Services for Safe and Trusted <br /> Diagnostic Results</span>,
        subtitle: <span className="text-[#1E1E1E] font-sans font-medium">Get detailed imaging with our advanced ultrasonography <br /> technology. From pregnancy scans to organ evaluations,<br /> we provide quick, safe, and reliable results performed by <br /> certified sonographers and radiologists.</span>,
        image: "/images/2d-3d-ultrasound/section1/section1.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="2D/3D Ultrasound" />
}

export default Section1