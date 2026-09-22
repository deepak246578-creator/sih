import { ShieldAlert, ShieldCheck, TriangleAlert } from "lucide-react";

export default function SafetyStatus({ distance, levelInfo }) {
  const { level, label, color } = levelInfo;

  const config = {
    SAFE: {
      icon: <ShieldCheck size={44} />,
      bg: "#dcfce7",
      border: "#22c55e",
      text: "#15803d",
      desc: "No immediate hazard. Monitoring continues.",
    },
    CAUTION: {
      icon: <TriangleAlert size={44} />,
      bg: "#fef9c3",
      border: "#eab308",
      text: "#a16207",
      desc: "Object within caution range. Prepare to slow down.",
    },
    CRITICAL: {
      icon: <ShieldAlert size={44} />,
      bg: "#fee2e2",
      border: "#dc2626",
      text: "#b91c1c",
      desc: "Critical proximity! Immediate driver & worker alert.",
    },
  }[level];

  return (
    <div className="card safety-card" style={{ borderLeft: `6px solid ${config.border}` }}>
      <div className="card-header">
        <h3>Safety Status</h3>
        <span className="threshold-note">Demo thresholds: &gt;100m SAFE • 50-100m CAUTION • &lt;50m CRITICAL</span>
      </div>

      <div className="safety-visual" style={{ background: config.bg, borderColor: config.border, color: config.text }}>
        <div className="safety-icon">{config.icon}</div>
        <div>
          <div className="safety-label" style={{ color: config.text }}>{label}</div>
          <div className="safety-distance">{distance} m</div>
          <div className="safety-level-text">{level}</div>
        </div>
      </div>

      <p className="safety-desc">{config.desc}</p>

      <div className="safety-scale">
        <div className={`scale-item ${level === "SAFE" ? "active" : ""}`} style={{ borderColor: "#22c55e", background: level === "SAFE" ? "#dcfce7" : "#f8fafc" }}>
          <span className="dot" style={{ background: "#22c55e" }}></span> &gt;100m SAFE
        </div>
        <div className={`scale-item ${level === "CAUTION" ? "active" : ""}`} style={{ borderColor: "#eab308", background: level === "CAUTION" ? "#fef9c3" : "#f8fafc" }}>
          <span className="dot" style={{ background: "#eab308" }}></span> 50-100m CAUTION
        </div>
        <div className={`scale-item ${level === "CRITICAL" ? "active" : ""}`} style={{ borderColor: "#dc2626", background: level === "CRITICAL" ? "#fee2e2" : "#f8fafc" }}>
          <span className="dot" style={{ background: "#dc2626" }}></span> &lt;50m CRITICAL
        </div>
      </div>
    </div>
  );
}
