import React, { useEffect, useState } from "react";

export default function ViewCounter({ pageKey }) {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const key = pageKey || "default-page";
    const isLocal = window.location.hostname === "localhost";

    if (isLocal) {
  
      const storedViews = localStorage.getItem(key);
      const newViews = storedViews ? parseInt(storedViews) + 1 : 1;
       localStorage.setItem(key, newViews);
 

      setViews(newViews);
      return;
    }


    fetch(`https://api.countapi.xyz/hit/daslab-counter/${key}`)
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch(() => setViews("Error"));
  }, [pageKey]);

  if (views === null) return <p>👁️ Loading views...</p>;
  if (views === "Error") return <p>👁️ View data unavailable</p>;

  return (
    <p style={{ fontSize: "0.9rem", color: "#555" }}>
      👁️ {views} {views === 1 ? "view" : "views"}
    </p>
  );
}
