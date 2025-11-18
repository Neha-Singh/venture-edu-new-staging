import TermsOfServiceSection from "./TermsOfServiceSection";
import { METADATA } from "@/constants/stringConstants";
export function generateMetadata() {
  return METADATA["terms-of-service"]
}
export default function TermsOfService() {
  return (
      <>
        <TermsOfServiceSection />
      </>
  );
}
