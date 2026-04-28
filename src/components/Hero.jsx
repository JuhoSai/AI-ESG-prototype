import { ArrowRight, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="eyebrow">
          <Leaf size={18} />
          AI-powered ESG communication
        </div>

        <h1>Sustainable stainless steel. Transparent ESG performance.</h1>

        <p>
          A professional prototype website for Outokumpu that combines
          sustainability information, ESG report themes, AI-generated insights,
          and a visual ESG dashboard.
        </p>

        <a href="#dashboard" className="primary-button">
          View dashboard <ArrowRight size={18} />
        </a>
      </div>

      <div className="hero-card">
        <p className="card-label">ESG highlights</p>
        <div className="hero-grid">
          <div>
            <strong>97%</strong>
            <span>Recycled content</span>
          </div>
          <div>
            <strong>89%</strong>
            <span>Low-emission electricity</span>
          </div>
          <div>
            <strong>33%</strong>
            <span>Emission intensity reduction</span>
          </div>
          <div>
            <strong>12 Mt</strong>
            <span>Avoided customer emissions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
