import Link from "next/link";
import Container from "./Component";
import Image from "next/image";
import { Logo } from "@/public";
import Hero from "../Hero";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Teacher", href: "/teacher" },
  { name: "Gallery", href: "/gallery" },
  { name: "Result", href: "/result" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <div className="relative">
      {/* Header */}
      <div className="w-full h-20 z-10 relative text-white bg-[#5592d0]/80 ">
        <Container className="h-full flex items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="logo-image"
                className="w-28"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="hidden md:inline-flex items-center gap-8">
            {NavItems?.map((items) => (
              <Link
                key={items?.name}
                href={items?.href}
                className="text-lg font-semibold group"
              >
                {items?.name}
                <div className="w-px group-hover:w-full h-px bg-red-500 duration-300" />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
