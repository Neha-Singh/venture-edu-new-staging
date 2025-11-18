
import Banner from "./banner";
import ContactUS from "./contactUs";
import { METADATA } from "@/constants/stringConstants";
export function generateMetadata() {
  return METADATA["contact"]
}
export default function Contact() {
  return (
   <>
      <Banner />
      <ContactUS />
    </>
  );
}
