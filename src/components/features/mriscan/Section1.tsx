import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className="font-sans font-[650] text-[24px] lg:text-[38px]">Advanced 1.5 Tesla <span className="text-[#F98D1B]"> MRI Scans</span> for Clear and <br /> Accurate Diagnosis</span>,
        subtitle: <span className="text-[#1E1E1E] font-secondary font-medium">Experience high-definition imaging with our latest 1.5 <br /> Tesla MRI system. We ensure maximum comfort, <br /> minimal noise, and fast reporting all handled by expert <br /> radiologists you can trust. </span>,
        image: "/images/mriscan/section1/mribanner.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="MRI Scan" />
}

export default Section1