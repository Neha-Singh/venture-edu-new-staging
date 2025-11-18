import PrivacyPolicySection from "./PrivacyPolicySection";
import { METADATA } from "@/constants/stringConstants";
export function generateMetadata() {
  return METADATA["privacy-policy"]
}
export default function PrivacyPolicy() {
  return (
    <PrivacyPolicySection />
  );
}
