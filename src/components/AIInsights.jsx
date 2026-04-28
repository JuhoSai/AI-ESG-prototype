import { Sparkles, Search } from "lucide-react";
import { useState } from "react";

export default function AIInsights() {
  const [question, setQuestion] = useState("");

  const answer = question.trim()
    ? `AI insight for “${question}”: connect the answer to ESG report data, show the reporting year and explain the KPI boundary clearly.`
    : "Ask about recycled content, emissions, low-emission electricity, safety, governance, or customer avoided emissions.";

  return (
    <section id="ai" className="section ai-section">
      <div className="section-heading">
        <p className="section-kicker">AI assistant</p>
        <h2>Ask the ESG report</h2>
        <p>
          The AI layer helps users understand dashboard values and sustainability
          report content in plain language.
        </p>
      </div>

      <div className="ai-panel">
        <div className="ai-input">
          <Search size={20} />
          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Example: What does recycled content mean?"
          />
        </div>

        <div className="ai-answer">
          <Sparkles size={20} />
          <p>{answer}</p>
        </div>
      </div>
    </section>
  );
}
