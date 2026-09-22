import { User, Truck, Construction, Clock3 } from "lucide-react";

const iconMap = {
  Person: <User size={20} />,
  Vehicle: <Truck size={20} />,
  Obstacle: <Construction size={20} />,
};

const levelStyle = {
  SAFE: { bg: "#dcfce7", color: "#15803d", border: "#bbf7d0" },
  CAUTION: { bg: "#fef9c3", color: "#a16207", border: "#fef08a" },
  CRITICAL: { bg: "#fee2e2", color: "#b91c1c", border: "#fecaca" },
};

export default function DetectionPanel({ detection }) {
  const { type, distance, timestamp, level } = detection;
  const levelKey = level.level;
  const style = levelStyle[levelKey];

  return (
    <div className="card">
      <div className="card-header">
        <h3>Live Detection</h3>
        <span className="live-dot"><span></span> LIVE</span>
      </div>

      <div className="detection-main">
        <div className="detection-icon" style={{ background: style.bg, color: style.color, borderColor: style.border }}>
          {iconMap[type] || <User size={20} />}
        </div>
        <div className="detection-info">
          <div className="detection-type">{type}</div>
          <div className="detection-distance">{distance} m</div>
          <div className="detection-meta">
            <Clock3 size={12} /> {timestamp}
          </div>
        </div>
        <div className="detection-badge" style={{ background: style.bg, color: style.color, borderColor: style.border }}>
          {level.label}
        </div>
      </div>

      <div className="detection-extra">
        <div className="extra-item">
          <span>Object Type</span>
          <strong>{type}</strong>
        </div>
        <div className="extra-item">
          <span>Distance</span>
          <strong>{distance} m</strong>
        </div>
        <div className="extra-item">
          <span>Warning Level</span>
          <strong style={{ color: style.color }}>{level.level}</strong>
        </div>
        <div className="extra-item">
          <span>Detection Time</span>
          <strong>{timestamp}</strong>
        </div>
      </div>
    </div>
  );
}
