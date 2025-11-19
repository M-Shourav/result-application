"use client";
import Container from "@/components/ui/Component";
import { Skeleton } from "@/components/ui/skeleton";
import { TeacherDataType } from "@/type";
import { serverUrl } from "@/utils/config";
import axios from "axios";
import { ChevronRight, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SinglePage = () => {
  const [loading, setLoading] = useState(false);
  const [teacher, setTeacherData] = useState<TeacherDataType>();
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;

    const fetchTeacher = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${serverUrl}/api/single-teacher/${slug}`, {
          withCredentials: true,
        });
        const data = res?.data;
        if (data?.success) {
          setTeacherData(data?.teacher);
        } else {
          toast.error(data?.message);
        }
      } catch (error) {
        console.log("Failed to load teacher", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeacher();
  }, [slug]);

  return (
    <section>
      {/* Header title */}
      <div className="w-full min-h-48 mx-auto flex items-center justify-center">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            শিক্ষক/শিক্ষিকা বিস্তারিত
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
            <Link
              href={`/teacher/${slug}`}
              className="text-green-700 font-bold"
            >
              শিক্ষক/শিক্ষিকা বিস্তারিত
            </Link>
          </div>
        </div>
      </div>
      {loading ? (
        <Container className={"h-[400px] grid grid-cols-1 md:grid-cols-2"}>
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
        </Container>
      ) : (
        <div className="w-full bg-white/80">
          <Container className={"py-10"}>
            <div className="w-full flex flex-col lg:flex-row items-start gap-6">
              <div className="">
                <Image
                  src={teacher?.avatar?.url ?? "/placeholder.png"}
                  alt={teacher?.name ?? "Teacher image"}
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex-1 flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2  ">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    {teacher?.name}
                  </h1>
                  <p className="text-base font-semibold text-muted-foreground">
                    ({teacher?.title})
                  </p>
                </div>
                <div className="w-full h-0.5 bg-green-500" />
                {/* contact */}
                <div className=" flex items-start justify-between max-w-xl">
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-muted-foreground text-base font-semibold">
                      পিডিএস আইডি:{" "}
                      <span className="text-black font-medium">
                        {teacher?.psdId}
                      </span>
                    </h3>
                    <h3 className="text-muted-foreground text-base font-semibold">
                      যোগদান তারিখ:{" "}
                      <span className="text-black font-medium">
                        {teacher?.joiningDate}
                      </span>
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-muted-foreground text-base font-semibold">
                      যোগাযোগ মাধ্যম
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        {teacher?.socialLinks.phone && (
                          <Link
                            href={`tel:${teacher?.socialLinks.phone}`}
                            className="w-full h-full bg-green-400 text-white hover:bg-green-500 flex items-center justify-center  rounded-sm duration-300"
                          >
                            <FaPhone className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        {teacher?.socialLinks.email && (
                          <Link
                            href={`mailto:${teacher?.socialLinks.email}`}
                            className="w-full h-full bg-green-400 text-white hover:bg-green-500 flex items-center justify-center  rounded-sm duration-300"
                          >
                            <MdEmail className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        {teacher?.socialLinks.email && (
                          <Link
                            href={teacher?.socialLinks.facebook}
                            target="-blank"
                            className="w-full h-full bg-green-400 text-white hover:bg-green-500 flex items-center justify-center  rounded-sm duration-300"
                          >
                            <FaFacebookF className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        {teacher?.socialLinks.linkedin && (
                          <Link
                            href={teacher?.socialLinks.linkedin}
                            target="-blank"
                            className="w-full h-full bg-green-400 text-white hover:bg-green-500 flex items-center justify-center  rounded-sm duration-300"
                          >
                            <FaLinkedin className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className=" text-sm font-medium text-black/80 leading-6 tracking-wider">
                    {teacher?.quote}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
};

export default SinglePage;
