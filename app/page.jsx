import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

export default function Home() {
  return (
    <main className="">
      <div>
        <Hero />
        <InfoBoxes />
        <HomeProperties />
      </div>
    </main>
  );
}
