import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      className="relative top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/Banner-image.png')" }}
    >
      {/* bg-overly */}
      <div className=" absolute inset-0 bg-black/50" />
      <div className="text-center  p-6 rounded-lg z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Innovative Learning for Every Student
        </h1>
        <p className="text-base md:text-lg mt-2 max-w-3xl mx-auto">
          Our school management system brings innovation and simplicity to
          education. From attendance tracking to result management — everything
          is just a click away. Empowering schools, teachers, students, and
          parents with a smarter way to learn and manage.
        </p>
        <Button className="mt-5 text-lg p-6 bg-[#5592d0]/80 hover:bg-[#5592d0]">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
