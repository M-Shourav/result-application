"use client";

import React, { useEffect, useState } from "react";
import Container from "./ui/Component";
import axios from "axios";
import toast from "react-hot-toast";
import { CommitteeMember } from "@/type";
import { Card } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { serverUrl } from "@/utils/config";

const Committee = () => {
  const [loading, setLoading] = useState(false);
  const [CommitteeData, setCommitteeData] = useState<CommitteeMember[]>([]);

  useEffect(() => {
    const getCommitteeList = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${serverUrl}/api/all-committee`, {
          // withCredentials: true,
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
      <Container className={"py-10"}>
        {/* Header title */}
        <div className="flex items-end gap-x-4 mb-6">
          <div className=" shrink-0">
            <h2 className="text-lg md:text-3xl font-semibold md:font-bold tracking-tight">
              স্কুল কমিটির সদস্যবৃন্দ
            </h2>
          </div>
          <div className="w-full h-px bg-gray-400/50" />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CommitteeData.slice(0, 4).map((item, index) => (
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
        </div>
        <div className="w-full col-span-4 flex items-center justify-center mt-5">
          <Link
            href={"/committee"}
            className="flex items-center gap-2 bg-[#e0fdf4] text-[#019267] mt-4 text-base font-extrabold p-3 rounded-md hover:bg-[#019267] hover:text-white duration-300"
          >
            আরো দেখুন <FaArrowRightLong />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Committee;
