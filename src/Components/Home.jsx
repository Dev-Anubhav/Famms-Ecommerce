import Arrival from "./arrival";
import Shop from "./Shop";
import Products from "./product"
import Subs from "./Subscribe"
import Footer from "./Footer"
import Testi from "./testimonial"
import Homeslider from "./Homeslider"
const home=()=>{
   return(
    <>
  <Homeslider />

  <Shop />
 
  <Arrival />

  <Products />
 
<Subs />
 <Testi />

  <Footer />


    </>
   )
}
export default home;