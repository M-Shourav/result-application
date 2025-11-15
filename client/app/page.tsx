import Hero from "@/components/Hero";
import Notice from "@/components/Notice";
import TeacherList from "../components/TeacherList";
import Gallery from "@/components/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <Notice />
      <TeacherList />
      <Gallery />
    </div>
  );
};

export default Home;
