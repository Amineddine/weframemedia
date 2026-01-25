import Hero from "@/components/sections/Hero";
import AgencyIntro from "@/components/sections/AgencyIntro";
import LatestWork from "@/components/sections/LatestWork";
import Clients from "@/components/sections/Clients";
import Capabilities from "@/components/sections/Capabilities";
import FollowUs from "@/components/sections/FollowUs";
import CTA from "@/components/sections/CTA";
import Noise from "@/components/ui/noise";

export default function Home() {
  return (
    <>
      <Hero />
      <AgencyIntro />
      <LatestWork />

      {/* Spacer 1 */}
      <div className="h-[15vh] w-full bg-black relative overflow-hidden">
        <Noise patternAlpha={15} />
      </div>

      <Clients />

      {/* Spacer 2 */}
      <div className="h-[25vh] w-full bg-black relative overflow-hidden">
        <Noise patternAlpha={15} />
      </div>

      <Capabilities />

      {/* Spacer 3 */}
      <div className="h-[25vh] w-full bg-black relative overflow-hidden">
        <Noise patternAlpha={15} />
      </div>

      <FollowUs />

      {/* Spacer 4 */}
      <div className="h-[25vh] w-full bg-black relative overflow-hidden">
        <Noise patternAlpha={15} />
      </div>

      <CTA />

      {/* Footer Spacer (No Noise) */}
      <div className="h-32 md:h-48 w-full bg-black" />
    </>
  );
}
