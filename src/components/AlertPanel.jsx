import { Siren, Volume2, BellRing } from "lucide-react";

export default function AlertPanel({ detection }) {
  const level = detection.level.level;
  const distance = detection.distance;
  const type = detection.type;

  let alertConfig;
  if (level === "CRITICAL") {
    alertConfig = {
      title: "CRITICAL ALERT",
      msg: `${type} detected at ${distance} m`,
      sub: "Immediate action required",
      bg: "#fee2e2",
      border: "#fecaca",
      color: "#b91c1c",
      icon: <Siren size={24} />,
      driver: "ON",
      buzzer: "ON",
      voice: "ALERTING",
    };
  } else if (level === "CAUTION") {
    alertConfig = {
      title: "CAUTION",
      msg: `Object detected at ${distance} m`,
      sub: "Reduce speed, stay alert",
      bg: "#fef9c3",
      border: "#fef08a",
      color: "#a16207",
      icon: <BellRing size={24} />,
      driver: "ON",
      buzzer: "STANDBY",
      voice: "READY",
    };
  } else {
    alertConfig = {
      title: "SAFE DISTANCE",
      msg: `Object detected at ${distance} m`,
      sub: "Monitoring — no immediate hazard",
      bg: "#dcfce7",
      border: "#bbf7d0",
      color: "#15803d",
      icon: <Volume2 size={24} />,
      driver: "ON",
      buzzer: "OFF",
      voice: "READY",
    };
  }

  return (
    <div className="card alert-card" style={{ background: alertConfig.bg, borderColor: alertConfig.border }}>
      <div className="alert-header" style={{ color: alertConfig.color }}>
        <div className="alert-icon">{alertConfig.icon}</div>
        <div>
          <div className="alert-title">{alertConfig.title}</div>
          <div className="alert-msg">{alertConfig.msg}</div>
          <div className="alert-sub">{alertConfig.sub}</div>
        </div>
      </div>

      <div className="driver-alerts">
        <div className="driver-item">
          <span>Display Alert</span>
          <strong className={level === "SAFE" ? "ok" : level === "CAUTION" ? "warn" : "critical"}>{alertConfig.driver}</strong>
        </div>
        <div className="driver-item">
          <span>Buzzer Status</span>
          <strong className={level === "CRITICAL" ? "critical" : "ok"}>{alertConfig.buzzer}</strong>
        </div>
        <div className="driver-item">
          <span>Voice Alert</span>
          <strong className={level === "CRITICAL" ? "critical" : "ok"}>{alertConfig.voice}</strong>
        </div>
      </div>

      <div className="alert-footer">
        <span>Driver Alert: <strong>{level === "CRITICAL" || level === "CAUTION" ? "ON" : "ON"}</strong></span>
        <span>Worker Alert: <strong style={{ color: level === "CRITICAL" ? "#b91c1c" : "#64748b" }}>{level === "CRITICAL" ? "ON" : "OFF"}</strong></span>
      </div>
    </div>
  );
}
