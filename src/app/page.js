import Care from "./view/Care";
import Footer from "./view/Footer";
import Hero from "./view/Hero";
import Products from "./view/Products";
import Reference from "./view/Reference";
import Services from "./view/Services";
import Shop from "./view/Shop";


export default function Home() {
  return (
    <>
    <Hero />
    <Services /> 
    <Products />
    <Reference /> 
    <Care />
    <Shop/>
    <Footer /> 
   </>
  )
}
