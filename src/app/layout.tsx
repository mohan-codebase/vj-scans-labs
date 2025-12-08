import type { Metadata } from "next";
import { Urbanist, DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import FooterTop from "@/components/layout/FooterTop";

const urbanist = Urbanist({
    variable: "--font-urbanist",
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const dancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://vj-scans-labs.vercel.app"),
    title: "VJ Scans & Labs",
    description: "Affordable & accurate scanning, blood tests, & lab services with fast reports. Book appointments instantly at VJ Scans & Labs, in Chennai.",
    openGraph: {
        title: "VJ Scans & Labs",
        description: 'Affordable & accurate scanning, blood tests, & lab services with fast reports. Book appointments instantly at VJ Scans & Labs, in Chennai.',
        url: 'https://vj-scans-labs.vercel.app/',
        siteName: 'VJ Scans & Labs',
        images: [{
            url: '/ogGraph.png',
            width: '1024',
            height: '1024',
            alt: 'vj-scans-logo image'
        }]
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${urbanist.variable} ${dmSans.variable} ${dancingScript.variable} antialiased`}
            >
                <Header />
                {children}
                <ScrollToTop />
                <FooterTop />
                <Footer />
            </body>
        </html>
    );
}
