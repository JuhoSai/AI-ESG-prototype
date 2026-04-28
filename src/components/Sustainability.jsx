import { Factory, Recycle, Users, ShieldCheck } from "lucide-react";

const sections = [
  {
    icon: Factory,
    title: "Climate action",
    text: "Focus on reducing emissions intensity across operations and the value chain."
  },
  {
    icon: Recycle,
    title: "Circularity",
    text: "High recycled material content supports lower-carbon stainless steel production."
  },
  {
    icon: Users,
    title: "People",
    text: "Safety, wellbeing, fair pay, and competence development support the social pillar."
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    text: "Transparent ESG reporting, responsible sourcing, and compliance strengthen trust."
  }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="section">
      <div className="section-heading">
        <p className="section-kicker">Sustainability strategy</p>
        <h2>Key ESG themes from Outokumpu reporting</h2>
        <p>
          The website presents sustainability information in a clear,
          stakeholder-friendly format.
        </p>
      </div>

      <div className="cards-grid">
        {sections.map((item) => {
          const Icon = item.icon;
          return (
            <article className="info-card" key={item.title}>
              <Icon size={28} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
