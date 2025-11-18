
import Banner from "./banner";
import EventsList from "./eventList";
import { METADATA } from "@/constants/stringConstants";
export function generateMetadata() {
  return METADATA["events"]
}
export default function Events() {
  return (
    <>
    <Banner />
    <EventsList/>
    </>
  );
}
