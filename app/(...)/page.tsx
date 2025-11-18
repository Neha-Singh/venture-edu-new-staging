
import HomeBanner from "./homeBanner";
import CountBanner from "./countBanner";
import OurPrograms from "./ourPrograms";
import OfflineEvents from "./offlineEvents";
import WhyWeExist from "./whyWeExist";
import Testimonials from "./testimonial";
import FAQs from "./FAQs";


export default function Home() {
  return (<>
    <HomeBanner />
    <CountBanner />
    <OurPrograms />
    <Testimonials />
    <OfflineEvents />
    <WhyWeExist />
    <FAQs />
  </>
  );
}
