import Hero from "@/components/Hero";
import Notice from "@/components/Notice";
import TeacherList from "../components/TeacherList";
import Gallery from "@/components/Gallery";
import Committee from "@/components/Committee";
import StudentList from "@/components/StudentList";
import TopStudent from "@/components/TopStudent";

const Home = () => {
  return (
    <div>
      <Hero />
      <Notice />
      <TeacherList />
      <Gallery />
      <Committee />
      <StudentList />
      <TopStudent />
    </div>
  );
};

export default Home;
