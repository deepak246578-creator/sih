import { Radar, Camera, ScanSearch, Activity, Radio } from "lucide-react";

const iconMap = {
  radar: <Radar size={16} />,
  camera: <Camera size={16} />,
  lidar: <ScanSearch size={16} />,
  pir: <Activity size={16} />,
  ultrasonic: <Radio size={16} />,
};

export default function SensorStatus({ sensors, onToggle }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Simulated Sensor Status</h3>
        <span className="sim-badge">SOFTWARE PROTOTYPE • NO HARDWARE CONNECTED</span>
      </div>
      <div className="sensor-grid">
        {sensors.map((s) => (
          <div key={s.id} className={`sensor-item ${s.status === "ACTIVE" ? "active" : "inactive"}`}>
            <div className="sensor-icon">
              {iconMap[s.id] || <Activity size={16} />}
            </div>
            <div className="sensor-info">
              <div className="sensor-name">{s.name}</div>
              <div className={`sensor-status ${s.status.toLowerCase()}`}>
                <span className="status-dot"></span>{s.status}
              </div>
            </div>
            <button className="sensor-toggle" onClick={() => onToggle(s.id)}>
              {s.status === "ACTIVE" ? "ON" : "OFF"}
            </button>
          </div>
        ))}
      </div>
      <p className="sensor-note">
        Demo: All sensors are simulated. Toggle to test inactive state. Future: replace with <code>GET /api/sensors</code>
      </p>
    </div>
  );
}
