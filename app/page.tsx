import Banner from "./Desktop/Sections/Banner";
import BeautyCorner from "./Desktop/Sections/BeautyCorner";
import Blog from "./Desktop/Sections/Blog";
import Category from "./Desktop/Sections/Category";
import ComboDeal from "./Desktop/Sections/ComboDeal";
import FeaturedProducts from "./Desktop/Sections/FeaturedProducts";
import NewArrivals from "./Desktop/Sections/NewArrivals";
import PansariInn from "./Desktop/Sections/Pureinnoils";
import Review from "./Desktop/Sections/Review";
import SolutionBar from "./Desktop/Sections/SolutionBar";
import VideoProducts from "./Desktop/Sections/VideoProducts";





export default function HomePage() {
  return (
   
      
    <>
      <Banner />
      <SolutionBar />
      <FeaturedProducts/>
      <Category/>
      <NewArrivals/>
      <BeautyCorner/>
      <PansariInn/>
      <ComboDeal/>
      <VideoProducts/>
      <Review/>
      <Blog/>
    
    </>
    

  );
}
