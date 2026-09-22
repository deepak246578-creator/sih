// Demo thresholds - configurable in one place
// These are SOFTWARE PROTOTYPE thresholds, not officially validated mining limits
export const SAFETY_THRESHOLDS = {
  SAFE_DISTANCE: 100,      // >100m => SAFE (GREEN)
  CAUTION_MIN: 50,         // 50-100m => CAUTION (YELLOW)
  CAUTION_MAX: 100,
  CRITICAL_BELOW: 50,      // <50m => CRITICAL (RED)
};

export function getSafetyLevel(distance) {
  if (distance > SAFETY_THRESHOLDS.SAFE_DISTANCE) {
    return { level: "SAFE", label: "SAFE DISTANCE", color: "green", bg: "#16a34a", lightBg: "#dcfce7", textColor: "#15803d" };
  }
  if (distance >= SAFETY_THRESHOLDS.CAUTION_MIN && distance <= SAFETY_THRESHOLDS.CAUTION_MAX) {
    return { level: "CAUTION", label: "CAUTION", color: "yellow", bg: "#eab308", lightBg: "#fef9c3", textColor: "#a16207" };
  }
  return { level: "CRITICAL", label: "CRITICAL", color: "red", bg: "#dc2626", lightBg: "#fee2e2", textColor: "#b91c1c" };
}

export function formatTime(date = new Date()) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
}

export const initialSensors = [
  { id: "radar", name: "Radar", status: "ACTIVE" },
  { id: "camera", name: "AI Camera", status: "ACTIVE" },
  { id: "lidar", name: "LiDAR", status: "ACTIVE" },
  { id: "pir", name: "PIR", status: "ACTIVE" },
  { id: "ultrasonic", name: "Ultrasonic", status: "ACTIVE" },
];

export const initialDetection = {
  type: "Person",
  distance: 78,
  timestamp: formatTime(new Date()),
  level: getSafetyLevel(78),
};

export const initialHistory = [
  { id: 1, time: "10:32 AM", type: "Person", distance: 35, level: "CRITICAL" },
  { id: 2, time: "10:29 AM", type: "Vehicle", distance: 75, level: "CAUTION" },
  { id: 3, time: "10:25 AM", type: "Obstacle", distance: 125, level: "SAFE" },
];

export const DISTANCE_PRESETS = [120, 100, 80, 60, 50, 40, 30, 20, 10];
export const OBJECT_TYPES = ["Person", "Vehicle", "Obstacle"];
export const VISIBILITY_OPTIONS = ["Normal", "Dusty", "Foggy", "Low Visibility"];
