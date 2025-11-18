import React from "react";
import BootcampHomeBanner from "./bootcampBanner";
import ProgramOutput from "./programOutput";
import ProgramStructured from "./programStructured";
import ProgramFee from "./ProgramFee";
import FAQs from "./FAQs";
import Who from "./Who";
import EntranceText from "./entranceTest";

import { METADATA } from "@/constants/stringConstants";
export function generateMetadata() {
  return METADATA["bootcamp"]
}

export default function Programs() {
  return (<>
    <BootcampHomeBanner />
    <ProgramOutput />
    <Who />
    <ProgramStructured />
    <ProgramFee />
    <FAQs/>
    <EntranceText/>
  </>
  );
}
