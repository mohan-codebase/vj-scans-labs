import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans font-[650] text-[#0961A1]'>
            Onco <span className='text-[#F98D1B]'>Diagnostics</span>
        </span>,
        subtitle: <span className="text-[#1E1E1E] font-sans font-medium">
            Our Onco Diagnostics division is dedicated to the early detection, accurate diagnosis, and monitoring of cancer through advanced laboratory testing. We combine cutting-edge technology, expert pathology review, and stringent quality standards to support clinicians in making confident, timely treatment decisions.
        </span>,
        image: "/images/Section1/banner-img-1-by-vj.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const Section1 = () => {
    return <HeroSection slides={slides} formSource="Onco Diagnostics" />
}

export default Section1
