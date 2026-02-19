"use client";

import { useEffect, useState } from "react";

const API_BASE = "https://mynapi.onrender.com";

type Suggestion = {
  place_id: string;
  description: string;
};

type PlaceData = {
  place_id: string;
  name: string;
  address?: string;
  lat?: number;
  lng?: number;
  website?: string | null;
};

export function HotelAIScanForm() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [placeData, setPlaceData] = useState<PlaceData | null>(null);
  const [locked, setLocked] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);

  const [form, setForm] = useState({
    personName: "",
    email: "",
  });

  /* ---------------- AUTOCOMPLETE ---------------- */
  useEffect(() => {
    if (locked || query.length < 2) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    fetch(
      `${API_BASE}/places/autocomplete?input=${encodeURIComponent(query)}`,
      { signal: controller.signal }
    )
      .then((res) => res.ok ? res.json() : [])
      .then((data) => {
        if (Array.isArray(data)) setSuggestions(data);
      })
      .catch(() => {});

    return () => controller.abort();
  }, [query, locked]);

  /* ---------------- SELECT PLACE ---------------- */
  const selectPlace = async (place_id: string) => {
    if (!place_id || loadingDetails) return;

    setLoadingDetails(true);

    try {
      const res = await fetch(
        `${API_BASE}/places/details?place_id=${encodeURIComponent(place_id)}`
      );

      if (!res.ok) {
        console.error("Details API failed");
        return;
      }

      const data = await res.json();

      if (!data?.place_id) {
        console.error("Invalid place details response");
        return;
      }

      setPlaceData(data);
      setQuery(data.name);
      setSuggestions([]);
      setLocked(true);
    } catch (e) {
      console.error("Details fetch error", e);
    } finally {
      setLoadingDetails(false);
    }
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!placeData) {
      alert("Please select a hotel from the list.");
      return;
    }

    const payload = {
      hotel: placeData,
      person_name: form.personName,
      email: form.email,
    };

    console.log("Submitting AI Scan:", payload);

    // TODO: POST to FastAPI / Supabase
  };

  /* ---------------- UI ---------------- */
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="col-lg-8 mx-auto bg-white p-4 rounded-4 shadow-sm">
          <h3 className="text-center mb-4">
            Run a Free Hotel Wellness AI Scan
          </h3>

          <form onSubmit={handleSubmit} className="row g-3">
            {/* HOTEL */}
            <div className="col-12 position-relative">
              <label className="form-label fw-bold">Hotel Name</label>
              <input
                value={query}
                onChange={(e) => {
                  setLocked(false);
                  setQuery(e.target.value);
                }}
                className="form-control form-control-lg"
                placeholder="Start typing hotel name…"
                required
              />

              {!locked && suggestions.length > 0 && (
                <ul className="list-group position-absolute w-100 z-3">
                  {suggestions.map((s) => (
                    <li
                      key={s.place_id}
                      className="list-group-item list-group-item-action"
                      onClick={() => selectPlace(s.place_id)}
                      style={{ cursor: "pointer" }}
                    >
                      {s.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* NAME */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Your Name</label>
              <input
                className="form-control"
                required
                value={form.personName}
                onChange={(e) =>
                  setForm({ ...form, personName: e.target.value })
                }
              />
            </div>

            {/* EMAIL */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Work Email</label>
              <input
                type="email"
                className="form-control"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div className="col-12 text-center">
              <button
                className="btn btn-primary btn-lg"
                disabled={loadingDetails}
              >
                {loadingDetails ? "Loading…" : "Run AI Scan"}
              </button>
            </div>
          </form>

          {placeData && (
            <pre className="mt-4 bg-light p-3 rounded small">
              {JSON.stringify(placeData, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </section>
  );
}
