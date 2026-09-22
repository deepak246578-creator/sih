import { useState, useCallback } from "react";
import Header from "./components/Header";
import SafetyStatus from "./components/SafetyStatus";
import DetectionPanel from "./components/DetectionPanel";
import SensorStatus from "./components/SensorStatus";
import DistanceSimulator from "./components/DistanceSimulator";
import AlertPanel from "./components/AlertPanel";
import WorkerAlert from "./components/WorkerAlert";
import AlertHistory from "./components/AlertHistory";
import VehicleStatus from "./components/VehicleStatus";
import SensorFlow from "./components/SensorFlow";
import { getSafetyLevel, formatTime, initialSensors, initialHistory, initialDetection } from "./data/simulatedData";

export default function App() {
  const [detection, setDetection] = useState(initialDetection);
  const [history, setHistory] = useState(initialHistory);
  const [sensors, setSensors] = useState(initialSensors);
  const [visibility, setVisibility] = useState("Low Visibility");
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  const currentLevel = detection.level;

  // Add to history helper
  const addToHistory = useCallback((type, distance, level) => {
    const entry = {
      id: Date.now() + Math.random(),
      time: formatTime(new Date()),
      type,
      distance,
      level: level.level,
    };
    setHistory((prev) => [entry, ...prev].slice(0, 20));
  }, []);

  const updateDetection = useCallback((type, distance) => {
    const level = getSafetyLevel(distance);
    const timestamp = formatTime(new Date());
    const newDetection = { type, distance, timestamp, level };
    setDetection(newDetection);
    addToHistory(type, distance, level);
  }, [addToHistory]);

  const handleDistanceChange = (distance) => {
    updateDetection(detection.type, distance);
  };

  const handleObjectSelect = (type) => {
    // generate a simulated distance based on type for realism
    // person often closer, vehicle further, obstacle random
    let distance;
    if (type === "Person") distance = Math.floor(Math.random() * 60) + 15; // 15-75
    else if (type === "Vehicle") distance = Math.floor(Math.random() * 80) + 60; // 60-140
    else distance = Math.floor(Math.random() * 100) + 10; // 10-110
    updateDetection(type, distance);
  };

  const handleManualDistance = (distance, type = detection.type) => {
    updateDetection(type, distance);
  };

  const handleSensorToggle = (id) => {
    setSensors((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: s.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" } : s))
    );
  };

  const runDemo = () => {
    if (isDemoRunning) return;
    setIsDemoRunning(true);
    const sequence = [
      { type: "Person", distance: 120 },
      { type: "Person", distance: 80 },
      { type: "Person", distance: 40 },
      { type: "Person", distance: 20 },
    ];
    let idx = 0;
    const step = () => {
      if (idx >= sequence.length) {
        setIsDemoRunning(false);
        return;
      }
      const { type, distance } = sequence[idx];
      updateDetection(type, distance);
      idx++;
      setTimeout(step, 1100);
    };
    step();
  };

  return (
    <div className="app">
      <Header vehicleStatus="ACTIVE" systemStatus="MONITORING" />

      {/* Demo banner */}
      <div className="demo-strip">
        <span>⚙️ DEMO MODE — SIMULATED SENSOR DATA</span>
        <span>• No physical sensors connected • Architecture ready for GET /api/sensors integration</span>
      </div>

      <main className="dashboard">
        {/* Top row: Safety + Detection + Alert */}
        <div className="grid grid-3">
          <SafetyStatus distance={detection.distance} levelInfo={currentLevel} />
          <DetectionPanel detection={detection} />
          <AlertPanel detection={detection} />
        </div>

        {/* Second row: Sensors + Distance Simulator + Worker + Vehicle */}
        <div className="grid grid-4">
          <SensorStatus sensors={sensors} onToggle={handleSensorToggle} />
          <DistanceSimulator
            distance={detection.distance}
            onDistanceChange={handleManualDistance}
            onObjectSelect={handleObjectSelect}
            selectedType={detection.type}
            onRunDemo={runDemo}
            isDemoRunning={isDemoRunning}
          />
          <div className="stack">
            <WorkerAlert level={currentLevel} />
            <VehicleStatus visibility={visibility} onVisibilityChange={setVisibility} />
          </div>
          <SensorFlow />
        </div>

        {/* Bottom row: History full width */}
        <div className="grid grid-1">
          <AlertHistory history={history} />
        </div>

        {/* Footer note */}
        <div className="footer-note">
          <strong>DETECTO — Smart Multi-Sensor Safety System for Iron Ore Mining Vehicles</strong> — Driver-assistance and hazard-awareness safety system.
          <br />
          Demo thresholds are for software prototype only and are not officially validated mining safety limits. Thresholds configurable in <code>simulatedData.js</code>.
        </div>
      </main>
    </div>
  );
}
