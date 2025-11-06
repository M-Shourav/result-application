import React from "react";
import Container from "./ui/Component";
import Image from "next/image";
import {
  Academic_img,
  Awards_img,
  Class_Room,
  Curricular_img,
  Departments_image,
  Examination_image,
  Online_class,
  Subject_overview,
} from "@/public";
import Link from "next/link";

const Academic = () => {
  return (
    <section>
      <Container className={"py-10"}>
        <h2 className="text-cl md:text-2xl text-center font-semibold uppercase">
          Academics at CMHS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
          <div className="relative h-full w-full">
            <div className="w-full h-[321px] rounded-md border shadow group">
              <Image
                src={Class_Room}
                alt="class-room"
                className="w-full h-full object-cover rounded-md"
              />
              <div className=" rounded-md w-full h-[30%] group text-white absolute bottom-0 right-0 flex items-center justify-center  bg-black/70 group-hover:bg-blue-900 duration-300">
                <Link
                  href={"#"}
                  className=" w-full h-full  flex items-center justify-center duration-300 text-base md:text-lg font-semibold"
                >
                  Class Information
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="w-full h-[321px] rounded-md border shadow group">
              <Image
                src={Departments_image}
                alt="class-room"
                className="w-full h-full object-cover rounded-md"
              />
              <div className=" rounded-md w-full h-[30%] group text-white absolute bottom-0 right-0 flex items-center justify-center  bg-black/70 group-hover:bg-blue-900 duration-300">
                <Link
                  href={"#"}
                  className=" w-full h-full  flex items-center justify-center duration-300 text-base md:text-lg font-semibold"
                >
                  Departments / Streams
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="w-full h-[321px] rounded-md border shadow group">
              <Image
                src={Subject_overview}
                alt="class-room"
                className="w-full h-full object-cover rounded-md"
              />
              <div className=" rounded-md w-full h-[30%] group text-white absolute bottom-0 right-0 flex items-center justify-center  bg-black/70 group-hover:bg-blue-900 duration-300">
                <Link
                  href={"#"}
                  className=" w-full h-full  flex items-center justify-center duration-300 text-base md:text-lg font-semibold"
                >
                  Subjects Overview
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="w-full h-[321px] rounded-md border shadow group">
              <Image
                src={Examination_image}
                alt="class-room"
                className="w-full h-full object-cover rounded-md"
              />
              <div className=" rounded-md w-full h-[30%] group text-white absolute bottom-0 right-0 flex items-center justify-center  bg-black/70 group-hover:bg-blue-900 duration-300">
                <Link
                  href={"#"}
                  className=" w-full h-full  flex items-center justify-center duration-300 text-base md:text-lg font-semibold"
                >
                  Examinations & Results
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="w-full h-[321px] rounded-md border shadow group">
              <Image
                src={Academic_img}
                alt="class-room"
                className="w-full h-full object-cover rounded-md"
              />
              <div className=" rounded-md w-full h-[30%] group text-white absolute bottom-0 right-0 flex items-center justify-center  bg-black/70 group-hover:bg-blue-900 duration-300">
                <Link
                  href={"#"}
                  className=" w-full h-full  flex items-center justify-center duration-300 text-base md:text-lg font-semibold"
                >
                  Academic Calendar
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="w-full h-[321px] rounded-md border shadow group">
              <Image
                src={Curricular_img}
                alt="class-room"
                className="w-full h-full object-cover rounded-md"
              />
              <div className=" rounded-md w-full h-[30%] group text-white absolute bottom-0 right-0 flex items-center justify-center  bg-black/70 group-hover:bg-blue-900 duration-300">
                <Link
                  href={"#"}
                  className=" w-full h-full  flex items-center justify-center duration-300 text-base md:text-lg font-semibold"
                >
                  Co-Curricular Activities
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="w-full h-[321px] rounded-md border shadow group">
              <Image
                src={Awards_img}
                alt="class-room"
                className="w-full h-full object-cover rounded-md"
              />
              <div className=" rounded-md w-full h-[30%] group text-white absolute bottom-0 right-0 flex items-center justify-center  bg-black/70 group-hover:bg-blue-900 duration-300">
                <Link
                  href={"#"}
                  className=" w-full h-full  flex items-center justify-center duration-300 text-base md:text-lg font-semibold"
                >
                  Awards & Achievements
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <div className="w-full h-[321px] rounded-md border shadow group">
              <Image
                src={Online_class}
                alt="class-room"
                className="w-full h-full object-cover rounded-md"
              />
              <div className=" rounded-md w-full h-[30%] group text-white absolute bottom-0 right-0 flex items-center justify-center  bg-black/70 group-hover:bg-blue-900 duration-300">
                <Link
                  href={"#"}
                  className=" w-full h-full  flex items-center justify-center duration-300 text-base md:text-lg font-semibold"
                >
                  Online Learning /E-Classroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Academic;
