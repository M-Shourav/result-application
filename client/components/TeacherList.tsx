"use client";
import React, { useState } from "react";
import Container from "./ui/Component";
import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "@/utils/config";
import toast from "react-hot-toast";
import { TeacherDataType } from "@/type";
import Link from "next/link";
import { TowerControl } from "lucide-react";
import { Button } from "./ui/button";
import { IoIosLink } from "react-icons/io";
import Image from "next/image";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const TeacherList = () => {
  const [loading, setLoading] = useState(false);
  const [teacherList, setTeacherList] = useState<TeacherDataType[]>([]);

  useEffect(() => {
    const getTeacherList = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${serverUrl}/api/all-teachers`, {
          withCredentials: true,
        });
        const data = res?.data;
        if (data?.success) {
          setTeacherList(data?.teacherList);
        } else {
          toast.error(data?.message);
        }
      } catch (error) {
        console.log("Fetching teacherList error:", error);
      } finally {
        setLoading(false);
      }
    };

    getTeacherList();
  }, []);
  return (
    <div className="w-full bg-white/80">
      <Container className={"py-10"}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="w-full lg:col-span-2">
            {/* heading */}
            <div className="relative flex items-end gap-x-2">
              <div className=" shrink-0">
                <h2 className="text-lg md:text-3xl font-semibold md:font-bold tracking-tight">
                  স্কুল শিক্ষক মন্ডলী
                </h2>
              </div>
              <div className="w-full h-0.5 bg-gray-200" />
            </div>
            {/* teacher data */}
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {teacherList.slice(0, 4)?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 bg-white rounded-t-r-md rounded-br-md shadow hover:shadow-md duration-300 "
                  >
                    <div className="max-w-40 max-h-[180px]">
                      <Image
                        src={item?.avatar.url}
                        alt={item?.name}
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="py-2">
                      <h2 className="text-lg font-bold">{item?.name}</h2>
                      <p className="text-sm text-muted-foreground font-semibold">
                        ({item?.title})
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center">
                          {item?.socialLinks.phone && (
                            <Link
                              href={`tel:${item?.socialLinks.phone}`}
                              className="w-full h-full bg-green-400 text-white hover:bg-green-500 flex items-center justify-center  rounded-sm duration-300"
                            >
                              <FaPhone className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center">
                          {item?.socialLinks.email && (
                            <Link
                              href={`mailto:${item?.socialLinks.email}`}
                              className="w-full h-full bg-green-400 text-white hover:bg-green-500 flex items-center justify-center  rounded-sm duration-300"
                            >
                              <MdEmail className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center">
                          {item?.socialLinks.email && (
                            <Link
                              href={item?.socialLinks.facebook}
                              target="-blank"
                              className="w-full h-full bg-green-400 text-white hover:bg-green-500 flex items-center justify-center  rounded-sm duration-300"
                            >
                              <FaFacebookF className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center">
                          {item?.socialLinks.linkedin && (
                            <Link
                              href={item?.socialLinks.linkedin}
                              target="-blank"
                              className="w-full h-full bg-green-400 text-white hover:bg-green-500 flex items-center justify-center  rounded-sm duration-300"
                            >
                              <FaLinkedin className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </div>

                      <Link
                        href={`/teacher/${item?.slug}`}
                        className="w-28 bg-[#daf9f0] text-[#019267] mt-4 text-xs flex items-center justify-center py-2 font-extrabold rounded-full hover:bg-[#019267] hover:text-white duration-300"
                      >
                        বিস্তারিত <FaArrowRightLong />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center mt-5">
                <Link
                  href={"/teacher"}
                  className="flex items-center gap-2 bg-[#daf9f0] text-[#019267] mt-4 text-base font-extrabold p-3 rounded-md hover:bg-[#019267] hover:text-white duration-300"
                >
                  সকল শিক্ষকবৃন্দ <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="w-full bg-gray-100 rounded-md px-3 py-2 lg:-mt-10">
            <div className="flex items-center justify-center gap-4 p-6">
              <TowerControl className="text-[#f45050]" size={40} />
              <h2 className="text-xl md:text-2xl font-semibold">
                অন্যান্য লিঙ্ক সমূহ
              </h2>
            </div>
            <div className="w-full h-auto flex flex-col gap-4">
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <IoIosLink className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    ওয়েব মেইল লগিন
                  </p>
                </div>
                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <IoIosLink className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    ভর্তি পরীক্ষার আবেদন
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <IoIosLink className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    পিডিএস (সরকারি মাধ্যমিক)
                  </p>
                </div>
                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <IoIosLink className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    ই-স্কুল
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <IoIosLink className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    আমাদের সাথে যোগাযোগ
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
              <div className="w-full flex items-center justify-between bg-white p-2 rounded-md">
                <div className="flex items-center flex-1">
                  <IoIosLink className="text-[#f45050] shrink-0 w-[30px] h-[30px]" />
                  <p className="text-sm font-semibold leading-snug wrap-break-words px-2">
                    ছবি এবং ভিডির গ্যালারী
                  </p>
                </div>

                <Button
                  className="py-1 bg-green-100/50 text-green-600 text-xs font-semibold rounded-full hover:bg-green-700 hover:text-white duration-300"
                  size="sm"
                >
                  ভিজিট করুন
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeacherList;
