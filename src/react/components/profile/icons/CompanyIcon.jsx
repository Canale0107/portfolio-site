// src/components/icons/CompanyIcon.jsx
import React from "react";

export default function CompanyIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          d="M0,179.714v248.969c0,13.568,11.101,24.669,24.669,24.669h50.632V155.107H24.669
            C11.101,155.107,0,166.146,0,179.714z"
          fill="currentColor"
        />
        <path
          d="M487.393,155.107h-50.632v298.245h50.632c13.506,0,24.607-11.101,24.607-24.669V179.714
            C512,166.146,500.899,155.107,487.393,155.107z"
          fill="currentColor"
        />
        <path
          d="M357.765,81.621c0-12.668-10.305-22.973-22.97-22.973h-157.57c-12.672,0-22.976,10.305-22.976,22.973v73.486
            h-30.101v298.245h263.709V155.107h-30.09V81.621z M197.418,101.818h117.177v53.289H197.418V101.818z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
