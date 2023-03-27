import Hero from "./components/hero/Hero";
import Reasons from "./components/Reasons/Reasons";
import Programs from "./components/Programs/Programs";
import Header from "./components/Header/Header";
import Plans from "./components/Plans/Plans";
import Testimonial from "./components/Testimonials/Testimonial";
import "./App.css";
import Email from "./components/Email/Email";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonial />
        <Email />
        <Footer />
      </main>
    </div>
  );
}

export default App;
