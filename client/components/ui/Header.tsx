import Link from "next/link";
import Container from "./Component";
import Image from "next/image";
import { Logo } from "@/public";

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
    <div className="w-full h-20">
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
        <div className="flex items-center gap-4">
          {NavItems?.map((items) => (
            <Link
              key={items?.name}
              href={items?.href}
              className="text-sm group"
            >
              {items?.name}
              <div className="w-px group-hover:w-full h-px bg-red-500 duration-300" />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Header;
