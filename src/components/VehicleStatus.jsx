import { Truck, Eye, Activity, Cpu, MapPin } from "lucide-react";

export default function VehicleStatus({ visibility, onVisibilityChange }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3><Truck size={16} /> Vehicle Information</h3>
      </div>

      <div className="vehicle-grid">
        <div className="vehicle-item">
          <MapPin size={14} />
          <div>
            <span>Vehicle ID</span>
            <strong>MINING-001</strong>
          </div>
        </div>
        <div className="vehicle-item">
          <Activity size={14} />
          <div>
            <span>Vehicle Status</span>
            <strong className="green">ACTIVE</strong>
          </div>
        </div>
        <div className="vehicle-item">
          <Cpu size={14} />
          <div>
            <span>System</span>
            <strong>MONITORING</strong>
          </div>
        </div>
        <div className="vehicle-item">
          <Eye size={14} />
          <div>
            <span>Visibility</span>
            <strong className={visibility === "Low Visibility" || visibility === "Foggy" || visibility === "Dusty" ? "warn" : "ok"}>{visibility.toUpperCase()}</strong>
          </div>
        </div>
      </div>

      <div className="visibility-control">
        <label><Eye size={12} /> Visibility Condition</label>
        <select value={visibility} onChange={(e) => onVisibilityChange(e.target.value)}>
          <option>Normal</option>
          <option>Dusty</option>
          <option>Foggy</option>
          <option>Low Visibility</option>
        </select>
        <p className="vis-note">For prototype: manually change to simulate dusty / fog conditions.</p>
      </div>
    </div>
  );
}
