
import Banner from "./banner";
import BlogList from "./blogList";
import { METADATA } from "@/constants/stringConstants";
export function generateMetadata() {
  return METADATA["blog"]
}

export default function Blog() {
  return (
      <>
         <Banner />
         <BlogList />
      </>
  );
}
