import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import FeaturedProperties from "@/components/FeaturedProperties";
import HomeProperties from "@/components/HomeProperties";

const Home = () => {
  return (
    <main className="">
      <div>
        <Hero />
        <InfoBoxes />
        <FeaturedProperties />
        <HomeProperties />
      </div>
    </main>
  );
};

export default Home;
