import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

const Home = () => {
  return (
    <main className="">
      <div>
        <Hero />
        <InfoBoxes />
        <HomeProperties />
      </div>
    </main>
  );
};

export default Home;
