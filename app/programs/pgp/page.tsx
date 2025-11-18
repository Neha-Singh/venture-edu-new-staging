import React from "react";
import PGPHomeBanner from "./pgpBanner";
import PGPourGoal from "./pgpourGoal";
import PGPMentorshipModel from "./pgpMentorshipModel";
import FindingPathways from "./fundingPathways";
import ProgramStructured from "./pgpProgramStructured";
import AdmissionProcess from "./admissionProcess";
import FAQs from "./FAQs";
import EntranceText from "./entranceTest";
import { METADATA } from "@/constants/stringConstants";
export function generateMetadata() {
  return METADATA["pgp"]
}

export default function Programs() {
  return (<>
    <PGPHomeBanner />
    <PGPourGoal />
    <PGPMentorshipModel />
    <FindingPathways />
    <ProgramStructured />
    <AdmissionProcess />
    <FAQs/>
    <EntranceText/>
  </>
  );
}
