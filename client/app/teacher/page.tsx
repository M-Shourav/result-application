"use client";
import Container from "@/components/ui/Component";
import { Skeleton } from "@/components/ui/skeleton";
import { TeacherDataType } from "@/type";
import axios from "axios";
import { ChevronRight, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [teacherList, setTeacherList] = useState<TeacherDataType[]>([]);

  useEffect(() => {
    const getTeacherList = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://result-application-1w09.onrender.com/api/all-teachers`,
          {
            withCredentials: true,
          }
        );
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
    <section>
      <div className="py-10">
        <div className="w-full min-h-48 mx-auto flex items-center justify-center">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              স্কুল শিক্ষক/শিক্ষিকা
            </h1>
            <div className="flex items-center justify-center">
              <Link
                href={"/"}
                className="flex items-center gap-x-1 text-base text-muted-foreground font-medium"
              >
                {" "}
                <House className="w-5 h-5" /> মূলপাতা
              </Link>
              <ChevronRight />
              <Link href={"/"} className="text-green-700 font-bold">
                শিক্ষক/শিক্ষিকা
              </Link>
            </div>
          </div>
        </div>

        <div>
          {loading ? (
            <div className={"h-[400px] grid grid-cols-1 md:grid-cols-2"}>
              <div className="flex items-center space-x-4 ">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
              <div className="flex items-center space-x-4 ">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
              <div className="flex items-center space-x-4 ">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
              <div className="flex items-center space-x-4 ">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full bg-white/80 py-2">
              <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {teacherList.map((item, index) => (
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
              </Container>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
