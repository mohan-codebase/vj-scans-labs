import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dff3ff] via-[#f6f6ff] to-[#e8efff] p-6">

      {/* GLASS CARD */}
      <div className="
        backdrop-blur-xl
        bg-white/30
        border border-white/40
        shadow-lg
        rounded-3xl
        max-w-md
        w-full
        p-10
        text-center
        relative
      ">

        {/* Decorative blobs */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F8952E]/30 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#0A243F]/20 blur-3xl rounded-full"></div>

        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/vj-scans-logo.avif"
            alt="VJ Scans & Labs"
            width={100}
            height={100}
            className="mx-auto drop-shadow-sm"
          />
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-[#0A243F] mb-4 tracking-tight">
          404
        </h1>

        {/* Message */}
        <p className="text-gray-700 text-sm mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <Button variant="primary">
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  );
}