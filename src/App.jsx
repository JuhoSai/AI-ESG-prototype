import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Sustainability from "./components/Sustainability.jsx";
import AIInsights from "./components/AIInsights.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Sustainability />
        <AIInsights />
      </main>
      <Footer />
    </div>
  );
}
