import React from "react";
import Container from "./ui/Component";
import Image from "next/image";
import { EduBanner } from "@/public";

const Community = () => {
  return (
    <section>
      <Container className="pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full">
            <Image src={EduBanner} alt="edu-banner" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              CREATING VIBRANT COMMUNITY
            </h2>
            <p className="text-base nd:text-lg text-muted-foreground">
              At Chilahati Merchant's High School, we are moving boldly - and
              concertedly - to expand tomorrow's frontiers. We believe that we
              have the power to shape the future, for the better
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
