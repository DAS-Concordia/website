import React, { useEffect, useState } from "react";

interface ViewCounterProps {
  pageKey: string;
}

export default function ViewCounter({ pageKey }: ViewCounterProps) {
  const [views, setViews] = useState<number | string>("...");

  useEffect(() => {
    if (!pageKey || typeof window === "undefined") return;

    const ns = "daslab"; // CounterAPI namespace

    const incrementAndFetch = async () => {
      try {
        // Increment counter
        await fetch(`https://counterapi.com/api/${ns}/view/${pageKey}/up`);

        // Fetch updated value
        const res = await fetch(`https://counterapi.com/api/${ns}/view/${pageKey}`);
        const json = await res.json();
        setViews(json.value ?? "N/A");
      } catch {
        setViews("N/A");
      }
    };

    incrementAndFetch();
  }, [pageKey]);

  return (
    <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "5px" }}>
      👁️ {views} {views === 1 ? "view" : "views"}
    </p>
  );
}
