import React from "react";
import Container from "./ui/Component";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaCircleInfo,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="w-full bg-[#20262e] text-white">
      <Container
        className={"py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}
      >
        <div>
          <div className="w-full py-4 shadow rounded-md bg-linear-to-r from-[#333840] to-transparent">
            <div className="border-l-4 border-l-green-400 px-4">
              <h2 className="text-lg md:text-xl font-semibold md:font-bold tracking-tight">
                অন্যান্য লিঙ্ক
              </h2>
            </div>
          </div>
          {/* link */}
          <div className="w-full flex flex-col gap-y-6 mt-10">
            <Link href={"#"} className="w-fit flex items-center flex-1 group">
              <IoIosLink className="text-[#f45050] shrink-0 w-[25px] h-[25px]" />
              <p className="text-sm font-semibold leading-snug wrap-break-words px-2 group-hover:text-green-400 duration-300">
                ওয়েব মেইল লগিন
              </p>
            </Link>
            <Link href={"#"} className="w-fit flex items-center flex-1 group">
              <IoIosLink className="text-[#f45050] shrink-0 w-[25px] h-[25px]" />
              <p className="text-sm font-semibold leading-snug wrap-break-words px-2 group-hover:text-green-400 duration-300">
                শিক্ষা মন্ত্রনালয়
              </p>
            </Link>
            <Link href={"#"} className="w-fit flex items-center flex-1 group">
              <IoIosLink className="text-[#f45050] shrink-0 w-[25px] h-[25px]" />
              <p className="text-sm font-semibold leading-snug wrap-break-words px-2 group-hover:text-green-400 duration-300">
                পিডিএস (সরকারি মাধ্যমিক)
              </p>
            </Link>
            <Link href={"#"} className="w-fit flex items-center flex-1 group">
              <IoIosLink className="text-[#f45050] shrink-0 w-[25px] h-[25px]" />
              <p className="text-sm font-semibold leading-snug wrap-break-words px-2 group-hover:text-green-400 duration-300">
                ই-স্কুল
              </p>
            </Link>
            <Link href={"#"} className="w-fit flex items-center flex-1 group">
              <IoIosLink className="text-[#f45050] shrink-0 w-[25px] h-[25px]" />
              <p className="text-sm font-semibold leading-snug wrap-break-words px-2 group-hover:text-green-400 duration-300">
                মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা
              </p>
            </Link>
            <Link
              href={"https://banbeis.gov.bd"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center flex-1 group"
            >
              <IoIosLink className="text-[#f45050] shrink-0 w-[25px] h-[25px]" />
              <p className="text-sm font-semibold leading-snug wrap-break-words px-2 group-hover:text-green-400 duration-300">
                ব্যানবেইস
              </p>
            </Link>
            <Link
              href={"https://naem.gov.bd"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center flex-1 group"
            >
              <IoIosLink className="text-[#f45050] shrink-0 w-[25px] h-[25px]" />
              <p className="text-sm font-semibold leading-snug wrap-break-words px-2 group-hover:text-green-400 duration-300">
                নায়েম
              </p>
            </Link>
            <Link
              href={"https://nctb.gov.bd"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center flex-1 group"
            >
              <IoIosLink className="text-[#f45050] shrink-0 w-[25px] h-[25px]" />
              <p className="text-sm font-semibold leading-snug wrap-break-words px-2 group-hover:text-green-400 duration-300">
                এনসিটিবি
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="w-full py-4 shadow rounded-md bg-linear-to-r from-[#333840] to-transparent">
            <div className="border-l-4 border-l-green-400 px-4">
              <h2 className="text-lg md:text-xl font-semibold md:font-bold tracking-tight">
                গুরুত্বপূর্ণ লিঙ্ক
              </h2>
            </div>
          </div>
          {/* link */}
          <div className="w-full flex flex-col gap-y-6 mt-10">
            <Link
              href={"/"}
              className="w-fit text-sm font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
            >
              যোগাযোগ
            </Link>
            <Link
              href={"/"}
              className="w-fit text-sm font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
            >
              প্রতিষ্ঠান পরিচিতি
            </Link>
            <Link
              href={"/"}
              className="w-fit text-sm font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
            >
              প্রতিষ্ঠানের তথ্যাদি
            </Link>
            <Link
              href={"/"}
              className="w-fit text-sm font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
            >
              সকল শিক্ষক/শিক্ষিকা বৃন্দ
            </Link>
            <Link
              href={"/"}
              className="w-fit text-sm font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
            >
              স্কুল কমিটির সদস্যবৃন্দ
            </Link>
            <Link
              href={"/"}
              className="w-fit text-sm font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
            >
              ছবি এবং ভিডিও গ্যালারী
            </Link>
            <Link
              href={"/"}
              className="w-fit text-sm font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
            >
              অধ্যায়নরত শিক্ষার্থীর সংখ্যা
            </Link>
            <Link
              href={"/"}
              className="w-fit text-sm font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
            >
              সংবাদ/ব্লগ সমূহ
            </Link>
          </div>
        </div>
        <div>
          <div className="w-full py-4 shadow rounded-md bg-linear-to-r from-[#333840] to-transparent">
            <div className="border-l-4 border-l-green-400 px-4">
              <h2 className="text-lg md:text-xl font-semibold md:font-bold tracking-tight">
                যোগাযোগ
              </h2>
            </div>
          </div>
          {/* link */}
          <div className="w-full flex flex-col gap-y-6 mt-10">
            <div className="flex items-center  gap-3">
              <div className="p-5 rounded-md bg-[#1d2f32] flex items-center justify-center">
                <MapPin className="text-green-600" size={40} />
              </div>

              <Link
                href={"#"}
                className="w-fit text-base font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
              >
                Flat #B4, House No:72 Road:20, Dhaka-1230, Bangladesh
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-5 rounded-md bg-[#1d2f32] flex items-center justify-center">
                <Phone className="text-green-600" size={40} />
              </div>

              <div className="flex flex-col gap-y-2">
                <Link
                  href={"tel: +88 01710267985"}
                  className="w-fit text-base font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
                >
                  +88 01710267985
                </Link>
                <Link
                  href={"tel:+88 01791235334"}
                  className="w-fit text-base font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
                >
                  +88 01791235334
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-5 rounded-md bg-[#1d2f32] flex items-center justify-center">
                <Mail className="text-green-600" size={40} />
              </div>

              <div className="flex flex-col gap-y-2">
                <Link
                  href={"mailto:am.masum1129@gmail.com"}
                  className="w-fit text-base font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
                >
                  am.masum1129@gmail.com
                </Link>
                <Link
                  href={"mailto:muhammadshourav625@gmail.com"}
                  className="w-fit text-base font-semibold leading-snug wrap-break-words px-2 hover:text-green-400 duration-300"
                >
                  am.masum1139@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-5 rounded-md bg-[#1d2f32] flex items-center justify-center">
                <FaCircleInfo className="text-green-600" size={40} />
              </div>

              <div className="flex flex-col gap-y-2">
                <p className="w-fit text-base font-semibold leading-snug wrap-break-words px-2 text-muted-foreground ">
                  EIIN no: <strong className="text-white">121314</strong>
                </p>
                <p className="w-fit text-base font-semibold leading-snug wrap-break-words px-2 text-muted-foreground ">
                  School code: <strong className="text-white">12345678</strong>
                </p>
                <p className="w-fit text-base font-semibold leading-snug wrap-break-words px-2 text-muted-foreground ">
                  Reg. no: <strong className="text-white">1213142546987</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* bottom footer */}
      <div className="w-full bg-[#363c43]">
        <Container
          className={
            "py-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          }
        >
          <div className="flex flex-col gap-y-2">
            <p className="w-fit text-base font-semibold leading-snug wrap-break-words px-2">
              © 2025 XYZ School & College. All right reserved.
            </p>
            <Link
              href={"https://masum-ahmed-navy.vercel.app"}
              className="w-fit text-lg  text-muted-foreground"
            >
              Design & Developed by:{" "}
              <strong className="text-green-400  ">Masum Ahmed</strong>
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-base font-semibold text-muted-foreground">
              Connect us:
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href={
                  "https://www.facebook.com/muhammad.masum.billah.shourav.2025"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-400 flex items-center justify-center"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/masum-ahmed-7bb530336"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-400 flex items-center justify-center"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="https://wa.me/8801710267985"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-700 flex items-center justify-center"
              >
                <FaWhatsapp size={25} />
              </Link>
              <Link
                href="https://t.me/masum1139"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-400 flex items-center justify-center"
              >
                <FaTelegramPlane size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/@MasumAhmed-cd"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden p-2 rounded-full bg-red-500 md:flex items-center justify-center"
              >
                <FaYoutube size={25} />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Footer;
