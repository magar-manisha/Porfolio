import React, { useState, useEffect } from "react";

export function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000); // update every 60 seconds
    return () => clearInterval(timer);
  }, []);

  const nepalTime = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kathmandu",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });

  return nepalTime
}
