"use client";
import React from "react";
import Container from "./ui/Component";
import CountUp from "react-countup";

const StudentList = () => {
  return (
    <section className="w-full bg-white/80">
      <Container className={"py-10"}>
        {/* Header */}
        <div className=" flex items-end gap-x-4 mb-6">
          <div className=" shrink-0">
            <h2 className="text-lg md:text-2xl font-semibold md:font-bold tracking-tight">
              ছাত্র/ছাত্রীদের পরিসংখান
            </h2>
          </div>
          <div className="w-full h-px bg-gray-300" />
        </div>
        <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8">
          <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <CountUp
                end={200}
                className={"text-xl md:text-2xl text-green-700 font-semibold"}
                duration={5}
                delay={2}
              />
              <h3 className="text-base md:text-xl font-semibold">
                Total Student&apos;s
              </h3>
              <p className="text-base md:text-lg font-semibold text-muted-foreground">
                Class Ten
              </p>
            </div>
          </div>
          <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <CountUp
                end={150}
                className={"text-xl md:text-2xl text-green-700 font-semibold"}
                duration={5}
                delay={2}
              />
              <h3 className="text-base md:text-xl font-semibold">
                Total Student&apos;s
              </h3>
              <p className="text-base md:text-lg font-semibold text-muted-foreground">
                Class Nine
              </p>
            </div>
          </div>
          <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <CountUp
                end={250}
                className={"text-xl md:text-2xl text-green-700 font-semibold"}
                duration={5}
                delay={2}
              />
              <h3 className="text-base md:text-xl font-semibold">
                Total Student&apos;s
              </h3>
              <p className="text-base md:text-lg font-semibold text-muted-foreground">
                Class Eight
              </p>
            </div>
          </div>
          <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <CountUp
                end={100}
                className={"text-xl md:text-2xl text-green-700 font-semibold"}
                duration={5}
                delay={2}
              />
              <h3 className="text-base md:text-xl font-semibold">
                Total Student&apos;s
              </h3>
              <p className="text-base md:text-lg font-semibold text-muted-foreground">
                Class Seven
              </p>
            </div>
          </div>
          <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <CountUp
                end={300}
                className={"text-xl md:text-2xl text-green-700 font-semibold"}
                duration={5}
                delay={2}
              />
              <h3 className="text-base md:text-xl font-semibold">
                Total Student&apos;s
              </h3>
              <p className="text-base md:text-lg font-semibold text-muted-foreground">
                Class Six
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StudentList;
