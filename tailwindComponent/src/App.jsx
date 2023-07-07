import { onMount } from "solid-js";
import { DatePicker } from "./DatePicker";
import { Footer } from "./Footer";
import { Cards } from "./Cards";
import { VedioCurosal } from "./VedioCurosal";
import Testimonials from "./Testimonials";
const App = () => {
  return (
    <>
    <DatePicker/>
    <Testimonials/>
    <VedioCurosal/>
    <Cards/>
    <Footer/>
    </>
  );
};

export default App;