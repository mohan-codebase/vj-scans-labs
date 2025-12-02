import { cn } from "@/lib/utils"

import { IconMenu2, IconX, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconMail, IconPhone, IconSearch, IconChevronDown } from "@tabler/icons-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import React, { useRef, useState } from "react"
const logo = '/images/vj-scans-logo.avif'
import Link from "next/link"
import Image from "next/image"

export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const [visible, setVisible] = useState(true) // Default visible to true for top bar

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Keep visible, but maybe change style on scroll?
    // For now, let's keep it simple and always visible or use the previous logic
    // The previous logic hid it until scroll > 100. That might hide the top bar too.
    // Let's make it always visible but maybe sticky.
    // User request: "navbar should looks like this"
    // Usually top bar scrolls away, navbar sticks.
    // But the current implementation is "fixed".
    // Let's keep it fixed.
    setVisible(latest > 100)
  })

  return (
    <motion.div
      ref={ref}
      className={cn("sticky top-5 z-50 w-full bg-transparent", className)} // Added bg-white
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          // @ts-expect-error: visible prop is injected via cloneElement
          ? React.cloneElement(child, { visible })
          : child,
      )}
    </motion.div>
  )
}

export const TopBar = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl rounded-[8px] mx-auto bg-[#E2F2FF] py-2 px-4 justify-between items-center text-xs text-gray-600 border-b border-gray-100 mt-5 gap-2 lg:gap-0">
      <div className="flex items-center gap-4 lg:gap-6 lg:pl-10">
        <span className="flex items-center gap-2"><Image src="/images/topbar/mail.svg" alt="mail" width={16} height={16} /> vjscans@gmail.com</span>
        <span className="flex items-center gap-2"><Image src="/images/topbar/phone.svg" alt="phone" width={16} height={18} /> 044-40000000</span>
      </div>
      <div className="flex items-center gap-3 lg:pr-10">
        <span className="font-medium">Follow us</span>
        <div className="flex items-center gap-0">
          <div className=" rounded-full p-1 cursor-pointer flex items-center justify-center w-9 h-9">
            <a href="https://www.facebook.com/vjscans" target="_blank"
              rel="noopener noreferrer"><Image src="/images/topbar/facebook.svg" alt="facebook" width={22} height={22} /></a>
          </div>
          <div className="bg-black rounded-full p-1 cursor-pointer flex items-center justify-center w-6 h-6">
            <a href="https://x.com/vjscans" target="_blank"
              rel="noopener noreferrer"><Image src="/images/topbar/x.svg" alt="x" width={22} height={22} /></a>
          </div>
          <div className=" rounded-full p-1 cursor-pointer flex items-center justify-center w-8 h-5">
            <a href="https://www.instagram.com/vjscans/" target="_blank"
              rel="noopener noreferrer"><Image src="/images/topbar/instagram.svg" alt="instagram" width={50} height={50} /></a>
          </div>
          <div className="bg-[#0077B5] rounded-full p-1 cursor-pointer flex items-center justify-center w-6 h-6">
            <a href="https://www.linkedin.com/company/vjscans/" target="_blank"
              rel="noopener noreferrer"><Image src="/images/topbar/linkedin.svg" alt="linkedin" width={20} height={20} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const NavbarSearch = () => {
  return (
    <div className="p-2 rounded-full border border-[#0961A1] text-[#0961A1] cursor-pointer hover:bg-blue-50 transition-colors">
      <IconSearch size={20} />
    </div>
  )
}

export const NavBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl bg-[#fff] flex-row items-center justify-between self-start rounded-[14px] px-4 py-4 lg:flex  ",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className }: { items: { name: string; link: string; subItems?: any[] }[]; className?: string }) => {
  const [hovered, setHovered] = useState<number | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [hoveredSubItem, setHoveredSubItem] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null)
        setActiveDropdown(null)
      }}
      className={cn(
        "flex flex-row items-center justify-center space-x-1 rounded-full  px-6 py-0", // Pill shape container
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`link-container-${idx}`}
          className="relative"
          onMouseEnter={() => {
            setHovered(idx)
            if (item.subItems) setActiveDropdown(idx)
          }}
          onMouseLeave={() => {
            if (item.subItems) setActiveDropdown(null)
          }}
        >
          <Link
            className="relative px-4 py-2 flex items-center gap-1"
            href={item.link}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#0961A1',
              fontWeight: 600,
              fontSize: '15px'
            }}
          >
            {/* Hover effect */}
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
            {item.subItems && <IconChevronDown size={14} className="relative z-20" />}
          </Link>

          {/* Dropdown */}
          <AnimatePresence>
            {activeDropdown === idx && item.subItems && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-[linear-gradient(90deg,#ffebd6,#d1ebff)] p-2 shadow-xl border border-gray-100 z-50"
                onMouseLeave={() => setHoveredSubItem(null)}
              >
                {item.subItems.map((subItem: { name: string; link: string }, subIdx: number) => (
                  <Link
                    key={`sub-${subIdx}`}
                    href={subItem.link}
                    className="relative block rounded-lg px-4 py-2 text-sm text-gray-700 transition-colors"
                    onMouseEnter={() => setHoveredSubItem(subIdx)}
                  >
                    {hoveredSubItem === subIdx && (
                      <motion.div
                        layoutId="dropdown-hovered"
                        className="absolute inset-0 h-full w-full rounded-[20px] bg-white/40 backdrop-blur-md border border-white/20 shadow-sm"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{subItem.name}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: { children: React.ReactNode; className?: string; visible?: boolean }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(1px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "12px" : "0.5rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1rem)] flex-col items-center justify-between  px-2 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  )
}

export const MobileNavMenu = ({ children, className, isOpen, onClose }: { children: React.ReactNode; className?: string; isOpen: boolean; onClose?: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-[linear-gradient(90deg,#ffebd6,#d1ebff)] px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  )
}

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src={logo}
        alt="logo"
        width={180}
        height={50} // Added height to maintain aspect ratio, assuming standard logo proportions or auto
        className="h-auto w-auto" // Ensure it scales correctly
      />
    </Link>
  )
}

export const NavbarButton = ({
  href,
  children,
  className,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles =
    "px-4 py-2 rounded-[8px] bg-white button bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"

  return (
    <Link
      href={href || "#"}
      className={cn(baseStyles, className)}
      {...props}
    >
      {children}
    </Link>
  )
}
