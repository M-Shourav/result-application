import Container from "./ui/Component";
import { FaUserGraduate, FaUsers } from "react-icons/fa6";
import { CalendarFold, GraduationCap, Users } from "lucide-react";
import Counter from "./Counter";

const BottomBanner = () => {
  return (
    <Container className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          className="flex flex-col items-center justify-center gap-4 border p-10 rounded-md shadow group
         hover:bg-[#5592d0] duration-300"
        >
          <span>
            <CalendarFold
              size={40}
              className="text-muted-foreground group-hover:text-white duration-300"
            />
          </span>
          <Counter
            end={67}
            duration={3000}
            className="block group-hover:text-white"
          />
          <p className="text-muted-foreground text-base md:text-lg group-hover:text-white duration-300">
            The year founded
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-4 border p-10 rounded-md shadow group
         hover:bg-[#5592d0] duration-300"
        >
          <span>
            <GraduationCap
              size={40}
              className="text-muted-foreground group-hover:text-white duration-300"
            />
          </span>
          <Counter
            end={300}
            duration={3000}
            className="block group-hover:text-white"
          />
          <p className="text-muted-foreground text-base md:text-lg group-hover:text-white duration-300">
            Students In 2025
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-4 border p-10 rounded-md shadow group
         hover:bg-[#5592d0] duration-300"
        >
          <span>
            <FaUsers
              size={40}
              className="text-muted-foreground group-hover:text-white duration-300"
            />
          </span>
          <Counter
            end={150}
            duration={3000}
            className="block group-hover:text-white"
          />
          <p className="text-muted-foreground text-base md:text-lg group-hover:text-white duration-300">
            Staff
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-4 border p-10 rounded-md shadow group
         hover:bg-[#5592d0] duration-300"
        >
          <span>
            <FaUserGraduate
              size={30}
              className="text-muted-foreground group-hover:text-white duration-300"
            />
          </span>
          <div className="flex items-center">
            <Counter
              end={300}
              duration={3000}
              className="block group-hover:text-white"
            />
            <p className="text-2xl md:text-3xl font-bold text-black group-hover:text-white duration-300">
              00
            </p>
          </div>
          <p className="text-muted-foreground text-base md:text-lg group-hover:text-white duration-300">
            Alummi
          </p>
        </div>
      </div>
    </Container>
  );
};

export default BottomBanner;
