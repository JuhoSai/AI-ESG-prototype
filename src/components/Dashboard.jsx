import dashboardImage from "../assets/outokumpu-dashboard.png";
import { Download, Maximize2 } from "lucide-react";

export default function Dashboard() {
  return (
    <section id="dashboard" className="section dashboard-section">
      <div className="section-heading">
        <p className="section-kicker">ESG dashboard</p>
        <h2>Outokumpu sustainability dashboard</h2>
        <p>

        </p>
      </div>

      <div className="dashboard-toolbar">
        <span>Visual dashboard mockup · AI-generated prototype</span>
        <div>
          <button>
            <Maximize2 size={16} /> View
          </button>
          <button>
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      <div className="dashboard-frame">
        <img
          src={dashboardImage}
          alt="Outokumpu ESG dashboard visual mockup"
        />
      </div>

      <p className="dashboard-note">
        Prototype note: use this image as a visual dashboard mockup. In a final
        implementation, the KPI cards and charts can be converted into live
        React components connected to ESG report data.
      </p>
    </section>
  );
}
