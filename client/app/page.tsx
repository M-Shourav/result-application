import Counter from "@/components/Counter";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter end={34} duration={2000} />
    </div>
  );
};

export default Home;
