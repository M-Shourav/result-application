const Hero = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/Banner-image.png')" }}
    >
      {/* bg-overly */}
      <div className=" absolute inset-0 bg-black/50" />
      <div className="text-center  p-6 rounded-lg z-10">
        <h1 className="text-5xl font-bold">
          Innovative Learning for Every Student
        </h1>
        <p className="text-lg mt-2 max-w-2xl mx-auto">
          Our school management system brings innovation and simplicity to
          education. From attendance tracking to result management — everything
          is just a click away. Empowering schools, teachers, students, and
          parents with a smarter way to learn and manage.
        </p>
      </div>
    </div>
  );
};

export default Hero;
