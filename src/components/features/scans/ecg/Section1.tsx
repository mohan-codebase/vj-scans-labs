import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans font-[650]'>Trusted <span className="text-[#F98D1B]"> ECG Tests </span> <br /> Heart Diagnostics</span>,
        subtitle: <span className="text-[#1E1E1E] font-sans font-medium">An Electrocardiogram (ECG) is a quick, simple, and non- <br /> invasive test that measures and records the electrical <br /> activity of your heart.</span>,
        image: "/images/ecg/section1/ecg-banner.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="ECG" />
}

export default Section1