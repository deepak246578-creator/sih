import { Users, RadioTower } from "lucide-react";

export default function WorkerAlert({ level }) {
  const isCritical = level.level === "CRITICAL";
  return (
    <div className="card worker-card">
      <div className="card-header">
        <h3><Users size={16} /> Nearby Worker Alert</h3>
        <span className={`worker-status ${isCritical ? "on" : "off"}`}>
          <span className="dot"></span>{isCritical ? "ON" : "OFF"}
        </span>
      </div>

      <div className={`worker-visual ${isCritical ? "critical" : "safe"}`}>
        <RadioTower size={28} />
        <div>
          <div className="worker-title">{isCritical ? "WORKER ALERT ACTIVE" : "Worker Alert Standby"}</div>
          <div className="worker-desc">
            {isCritical ? "Critical proximity — workers notified via buzzer / vests" : "No critical object in range. Workers in safe zone."}
          </div>
        </div>
      </div>

      <div className="worker-details">
        <div><span>Vibration Vest</span><strong>{isCritical ? "VIBRATING" : "IDLE"}</strong></div>
        <div><span>Audio Beacon</span><strong>{isCritical ? "ON" : "OFF"}</strong></div>
        <div><span>Signal Range</span><strong>~50 m</strong></div>
      </div>
    </div>
  );
}
