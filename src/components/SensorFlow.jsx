import { ArrowDown } from "lucide-react";

export default function SensorFlow() {
  const steps = [
    { label: "Sensors", sub: "Radar • Camera • LiDAR • PIR • Ultrasonic" },
    { label: "Sensor Data", sub: "Simulated stream" },
    { label: "Processing", sub: "Validation & Fusion" },
    { label: "Object Detection", sub: "Person / Vehicle / Obstacle" },
    { label: "Distance Assessment", sub: ">100 / 50-100 / <50 m" },
    { label: "Safety Alert", sub: "Driver + Worker Alert" },
  ];
  return (
    <div className="card flow-card">
      <div className="card-header">
        <h3>Sensor → Alert Flow</h3>
        <span className="flow-note">Prototype pipeline</span>
      </div>
      <div className="flow">
        {steps.map((s, i) => (
          <div key={s.label} className="flow-step-wrap">
            <div className="flow-step">
              <div className="flow-label">{s.label}</div>
              <div className="flow-sub">{s.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="flow-arrow">
                <ArrowDown size={14} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
