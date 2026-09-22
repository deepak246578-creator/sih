import { SlidersHorizontal } from "lucide-react";
import { DISTANCE_PRESETS, OBJECT_TYPES } from "../data/simulatedData";

export default function DistanceSimulator({ distance, onDistanceChange, onObjectSelect, selectedType, onRunDemo, isDemoRunning }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3><SlidersHorizontal size={16} /> Simulate Distance</h3>
        <span className="hint">Demo control</span>
      </div>

      <div className="sim-section">
        <label className="sim-label">Distance Presets (m)</label>
        <div className="preset-grid">
          {DISTANCE_PRESETS.map((d) => (
            <button
              key={d}
              onClick={() => onDistanceChange(d)}
              className={`preset-btn ${distance === d ? "active" : ""}`}
            >
              {d} m
            </button>
          ))}
        </div>
        <div className="slider-wrap">
          <input
            type="range"
            min="5"
            max="150"
            value={distance}
            onChange={(e) => onDistanceChange(Number(e.target.value))}
            className="distance-slider"
          />
          <div className="slider-labels">
            <span>5m</span>
            <span className="current">{distance} m</span>
            <span>150m</span>
          </div>
        </div>
      </div>

      <div className="sim-section">
        <label className="sim-label">Object Type Simulation</label>
        <div className="object-btns">
          {OBJECT_TYPES.map((t) => (
            <button
              key={t}
              onClick={() => onObjectSelect(t)}
              className={`object-btn ${selectedType === t ? "active" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="sim-note">Clicking an object generates a new simulated distance and updates dashboard.</p>
      </div>

      <button className="demo-btn" onClick={onRunDemo} disabled={isDemoRunning}>
        {isDemoRunning ? "Running Simulation..." : "▶ Run Safety Simulation"}
      </button>
      <p className="demo-flow">Flow: 120m → GREEN → 80m → YELLOW → 40m → RED → 20m → CRITICAL</p>
    </div>
  );
}
