import AboutBanner from "./aboutBanner";
import OurMission from "./ourMission";
import AdvisoryPanel from "./advisoryPanel";
import OurValues from "./ourValues";
import OurPhilosophy from "./ourPhilosophy";
import { METADATA } from "@/constants/stringConstants";
export function generateMetadata() {
  return METADATA["about"]
}
export default function About() {
  return (
    <>
      <AboutBanner />
      <OurMission />
      <AdvisoryPanel />
      <OurValues />
      <OurPhilosophy />
    </>
  );
}
