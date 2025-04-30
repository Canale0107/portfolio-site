import React from "react";
import values from "@/data/values.json";

export default function Values() {
  return (
    <section id="values">
      <h2>
        <span className="sec-en">MY VALUES</span>
        <span className="sec-ja">大切にする価値観</span>
      </h2>
      <div className="overview__values">
        {values.map((item, i) => (
          <div className="overview__value" key={i}>
            <div className="overview__value-icon">{item.label}</div>
            <p dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        ))}
      </div>
    </section>
  );
}
