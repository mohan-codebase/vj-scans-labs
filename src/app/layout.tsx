import { Urbanist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import FooterTop from "@/components/layout/FooterTop";
import { Metadata } from "next";
import { seoDatas, SITE_NAME, SITE_URL } from "@/lib/seo";
import { BookingProvider } from "@/context/BookingContext";
import BookingModal from "@/components/ui/BookingModal";
import KnowMoreModal from "@/components/ui/KnowMoreModal";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const urbanist = Urbanist({
    variable: "--font-sans",
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

const seo = seoDatas.home

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,

    openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.url,
        siteName: SITE_NAME,
        images: [
            {
                url: seo.image,
                width: 1200,
                height: 630,
                alt: "VJ Scans & Labs"
            },
        ],
        type: "website"
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${urbanist.variable} antialiased`}
                suppressHydrationWarning
            >
                <BookingProvider>
                    <Header />
                    {children}
                    <WhatsAppButton />
                    <ScrollToTop />
                    <FooterTop />
                    <Footer />
                    <BookingModal />
                    <KnowMoreModal />
                </BookingProvider>
            </body>
        </html>
    );
}
