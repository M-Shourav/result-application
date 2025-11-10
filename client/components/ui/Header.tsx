"use client";

import Link from "next/link";
import MobileNavigation from "../MobileNavigation";
import Container from "./Component";
import Image from "next/image";
import { Logo } from "@/public";

const Header = () => {
  return (
    <Container className={"mt-5"}>
      <div className="bg-white rounded-md p-5 flex items-center justify-between">
        <Link href={"/"} className="w-52 md:w-full">
          <Image src={Logo} alt="logo" />
        </Link>

        <MobileNavigation />
      </div>
    </Container>
  );
};

export default Header;
