import Hero from "@/components/sections/Hero";
import AgencyIntro from "@/components/sections/AgencyIntro";
import LatestWork from "@/components/sections/LatestWork";
import Clients from "@/components/sections/Clients";
import Capabilities from "@/components/sections/Capabilities";
import FollowUs from "@/components/sections/FollowUs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AgencyIntro />
      <LatestWork />
      <Clients />
      <div className="h-[25vh] w-full bg-black" />
      <Capabilities />
      <div className="h-[25vh] w-full bg-black" />
      <FollowUs />
      <div className="h-[25vh] w-full bg-black" />
      <CTA />
    </>
  );
}
