import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans font-[650]'>VJ Scans & Labs Health Checkup  <span className="text-[#F98D1B]">Packages</span></span>,
        subtitle: <span className="text-[#1E1E1E] font-secondary font-medium">Take a proactive step toward a healthier life. In today&apos;s fast-paced world, prioritizing your well-being is essential. Our comprehensive health checkup package offers an in-depth evaluation of your overall health, helping detect potential concerns before they become serious.</span>,
        image: "/images/specialities/male-infertility/section1/banner.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="Packages" />
}

export default Section1