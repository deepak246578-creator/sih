// API abstraction layer - currently returns simulated data
// Later replace with real API calls: GET /api/sensors etc.

import { initialSensors, initialDetection, initialHistory } from "../data/simulatedData";

let sensorCache = [...initialSensors];
let detectionCache = { ...initialDetection };
let historyCache = [...initialHistory];

export const sensorService = {
  getSensorStatus() {
    // TODO: replace with fetch("/api/sensors")
    return Promise.resolve([...sensorCache]);
  },
  getCurrentDetection() {
    // TODO: replace with fetch("/api/detection")
    return Promise.resolve({ ...detectionCache });
  },
  getAlertHistory() {
    // TODO: replace with fetch("/api/alerts")
    return Promise.resolve([...historyCache]);
  },
  // helpers for prototype to update cache (used internally)
  _updateDetection(newDetection) {
    detectionCache = { ...newDetection };
  },
  _addHistory(entry) {
    historyCache = [entry, ...historyCache].slice(0, 20);
  },
  _setSensors(newSensors) {
    sensorCache = [...newSensors];
  },
};
