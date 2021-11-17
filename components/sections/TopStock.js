import React from "react";

export default function TopStock({
  title = "Free 1 day shipping within California. ",
}) {
  return (
    <div className="top-stock">
      <div className="container top-stock__container">{title}</div>
    </div>
  );
}