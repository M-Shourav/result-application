"use client";
import { Card } from "@/components/ui/card";
import Container from "@/components/ui/Component";
import { Skeleton } from "@/components/ui/skeleton";
import { CommitteeMember } from "@/type";
import { serverUrl } from "@/utils/config";
import axios from "axios";
import { ChevronRight, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [CommitteeData, setCommitteeData] = useState<CommitteeMember[]>([]);

  useEffect(() => {
    const getCommitteeList = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${serverUrl}/api/all-committee`, {
          withCredentials: true,
        });
        const data = res?.data;
        if (data?.success) {
          setCommitteeData(data?.committeeList);
        } else {
          toast.error(data?.message);
        }
      } catch (error) {
        console.log("Fetching Committee Data error is", error);
      } finally {
        setLoading(false);
      }
    };
    getCommitteeList();
  }, []);
  return (
    <section>
      {/* Header */}
      <div className="w-full min-h-48 mx-auto flex items-center justify-center">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            স্কুল কমিটি সদস্যবৃন্দ
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
            <Link href={"/committee"} className="text-green-700 font-bold">
              স্কুল কমিটি
            </Link>
          </div>
        </div>
      </div>
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
          <Container
            className={
              "py-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4"
            }
          >
            {CommitteeData.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center gap-y-2"
              >
                <Image
                  src={item?.avatar.url}
                  alt={item?.name}
                  width={500}
                  height={500}
                  className="w-40 h-40"
                />
                <h2 className="text-base md:text-lg font-semibold">
                  {item?.name}
                </h2>
                <p className="text-sm text-muted-foreground font-semibold">
                  ({item?.title})
                </p>
                <div className="flex flex-col gap-y-2">
                  <p className="text-xs font-semibold text-muted-foreground flex items-center gap-x-2">
                    সদস্য যোগদান:
                    <strong className="text-xs text-black">
                      {item?.memberJoin}
                    </strong>
                  </p>
                  <p className="text-xs font-semibold text-muted-foreground flex items-center gap-x-2">
                    সদস্য মেয়াদকাল:
                    <strong className="text-xs text-black">
                      {item?.membershipTerm}
                    </strong>
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
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
              </Card>
            ))}
          </Container>
        </div>
      )}
    </section>
  );
};

export default page;
