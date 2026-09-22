import { History } from "lucide-react";

const badgeStyle = {
  SAFE: { bg: "#dcfce7", color: "#15803d" },
  CAUTION: { bg: "#fef9c3", color: "#92400e" },
  CRITICAL: { bg: "#fee2e2", color: "#b91c1c" },
};

export default function AlertHistory({ history }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3><History size={16} /> Alert History</h3>
        <span className="history-count">{history.length} events</span>
      </div>

      <div className="history-table-wrap">
        <table className="history-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Object</th>
              <th>Distance</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h) => (
              <tr key={h.id}>
                <td>{h.time}</td>
                <td>{h.type}</td>
                <td>{h.distance} m</td>
                <td>
                  <span className="level-badge" style={{ background: badgeStyle[h.level].bg, color: badgeStyle[h.level].color }}>
                    {h.level}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {history.length === 0 && <p className="empty">No alerts yet</p>}
      </div>
    </div>
  );
}
