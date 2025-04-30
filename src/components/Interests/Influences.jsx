import React from "react";

export default function Influences({ influences }) {
  return (
    <ul>
      {Object.entries(influences).map(([group, items]) => (
        <li key={group}>
          {group}:
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
