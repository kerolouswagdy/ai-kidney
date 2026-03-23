import React, { useState, useEffect } from "react";

// افتراضياً عندنا user من login
const mockUser = {
  id: "demo_patient_001",
  name: "Ahmed Ali"
};

export default function SmartAlerts() {
  const [text, setText] = useState("");
  const [patientId, setPatientId] = useState(""); // ID يظهر تلقائي
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // تعيين ID تلقائي بعد login
  useEffect(() => {
    if (mockUser) {
      setPatientId(mockUser.id); // ممكن user.name لو عايز الاسم
    }
  }, []);

  const analyze = () => {
    if (!text.trim()) return;

    setLoading(true);

    setTimeout(() => {
      setResult({
        level: "EMERGENCY",
        conditions: "Possible kidney complication",
        recommendation: "راجع الطبيب فورًا للتشخيص والعلاج",
        patient: patientId
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#eef2ff] to-[#dbeafe] p-6 md:p-10">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Smart Alerts & Monitoring
        </h1>
        <p className="text-gray-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          AI-powered anomaly detection & symptom analysis for real-time patient monitoring
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between h-[450px] border hover:shadow-2xl transition">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              📊 Patient Alerts Dashboard
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Run anomaly detection and predictive trend analysis on patient history to detect abnormal kidney patterns early.
            </p>
          </div>

          <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition">
            Scan for Anomalies
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 space-y-5 border hover:shadow-2xl transition">

          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            🧠 NLP Symptom Analysis
          </h2>

          <p className="text-gray-500 text-sm md:text-base">
            Enter patient symptoms (Arabic or English) and let AI classify urgency level instantly.
          </p>

          {/* TEXTAREA */}
          <textarea
            placeholder="مثال: اشعر بتورم في القدمين و إرهاق شديد"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none shadow-sm"
          />

          {/* INPUT Controlled */}
          <input
            placeholder="Patient Context ID"
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />

          {/* BUTTON */}
          <button
            onClick={analyze}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Analyzing...
              </>
            ) : (
              "Analyze Symptoms"
            )}
          </button>

          {/* RESULT */}
          {result && (
            <div className="mt-5 rounded-2xl p-5 shadow-lg border bg-white">

              <div className="flex justify-between items-center mb-4">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                  🚨 {result.level}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  Urgency Level
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Patient ID:</strong> {result.patient}
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  <strong>Possible Condition:</strong> {result.conditions}
                </p>
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl">
                  <p className="text-blue-800 text-sm font-semibold mb-1">
                    Recommendation:
                  </p>
                  <ul className="list-disc ml-5 text-blue-700 text-sm">
                    <li>{result.recommendation}</li>
                  </ul>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}