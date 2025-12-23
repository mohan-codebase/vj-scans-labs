import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
  {
    id: 1,
    title: <span className="font-sans font-[650] text-[24px] lg:text-[38px]">High-Quality <span className="text-[#F98D1B]">Digital <br /> X-Ray</span> Services for<br /> Fast and Clear Results</span>,
    subtitle: <span className="text-[#1E1E1E] font-secondary font-medium">At VJ Scans & Labs, we provide precise and safe X-ray <br /> imaging using the latest digital radiography <br /> technology.  </span>,
    image: "/images/xray/section1/xraybanner.avif",
    mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
    bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
  }
]

const Section1 = () => {
  return <HeroSection slides={slides} formSource="X-Ray" />
}

export default Section1