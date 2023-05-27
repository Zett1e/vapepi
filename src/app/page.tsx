import BestDeal from "@/components/BestDeal";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Membership from "@/components/Membership";
import Navbar from "@/components/Navbar";
import NewReleased from "@/components/NewReleased";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="relative">
      <Navbar/>
      <Hero/>
      <BestDeal/>
      <Membership/>
      <NewReleased/>
      <Products/>
      <Footer/>
    </main>
  )
}
