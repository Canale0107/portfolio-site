import React from "react";

export default function ResearchCard({
  title,
  description,
  authors,
  title_en,
  venue,
  location,
}) {
  return (
    <section className="research__card">
      <h3>{title}</h3>
      <p
        className="research__card-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="research__publication">
        <div className="research__publication-content">
          <p className="research__publication-authors">{authors}</p>
          <p className="research__publication-title">{title_en}</p>
          <p className="research__publication-venue">
            <i>{venue}</i>
          </p>
          <p className="research__publication-venue">{location}</p>
        </div>
      </div>
    </section>
  );
}
