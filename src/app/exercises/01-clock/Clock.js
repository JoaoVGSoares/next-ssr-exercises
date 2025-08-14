"use client";
import format from "date-fns/format";
import React from "react";

function Clock() {
  const [time, setTime] = React.useState();

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <p className="clock">{time ? format(time, "hh:mm:ss.S a") : "---"}</p>;
}

export default Clock;
