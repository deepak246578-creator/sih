import { ShieldCheck, Activity, Radio } from "lucide-react";

export default function Header({ vehicleStatus = "ACTIVE", systemStatus = "MONITORING", demoLabel = true }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="header-icon">
          <ShieldCheck size={28} />
        </div>
        <div>
          <h1 className="header-title">DETECTO</h1>
          <p className="header-subtitle">Smart Multi-Sensor Safety System — Iron Ore Mining Vehicle Safety Dashboard</p>
          <p className="header-tagline">Driver-assistance and hazard-awareness safety system</p>
        </div>
      </div>

      <div className="header-right">
        {demoLabel && (
          <div className="demo-badge">
            <Radio size={14} />
            DEMO MODE — SIMULATED SENSOR DATA
          </div>
        )}
        <div className="status-pills">
          <div className="pill">
            <span className="pill-dot green"></span>
            Vehicle: <strong>{vehicleStatus}</strong>
          </div>
          <div className="pill">
            <span className="pill-dot blue"></span>
            System: <strong>{systemStatus}</strong>
          </div>
        </div>
      </div>
    </header>
  );
}
