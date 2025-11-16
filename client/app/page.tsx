import Hero from "@/components/Hero";
import Notice from "@/components/Notice";
import TeacherList from "../components/TeacherList";
import Gallery from "@/components/Gallery";
import Committee from "@/components/Committee";

const Home = () => {
  return (
    <div>
      <Hero />
      <Notice />
      <TeacherList />
      <Gallery />
      <Committee />
    </div>
  );
};

export default Home;
