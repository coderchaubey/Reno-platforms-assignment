"use client";

import { useEffect, useState } from "react";
import SchoolCard from "@/components/SchoolCard";
import Navbar from "@/components/Navbar";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/schools")
      .then((res) => res.json())
      .then((data) => {
        if(data.error){
            throw new Error(data.error)
        }
        setSchools(data)
    })
      .catch((err) => {
        console.error(err)
    })
      .finally(() => setLoading(false));
  }, []);

  return (
  <div>
    <Navbar />
    <div className="school-list">
      {loading ? (
          <div className="message-box">
            <p className="loading">Loading Schools...</p>
          </div>
      ) : schools.length === 0 ? (
          <div className="message-box">
            <p className="empty">No Schools Found.</p>
          </div>
      ) : (
        schools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))
      )}
    </div>
  </div>
);

}
