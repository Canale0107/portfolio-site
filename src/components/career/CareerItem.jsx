export default function CareerItem({ date, title, descriptions = [] }) {
  return (
    <li>
      <span className="career__timeline-date">{date}</span>
      <div className="career__timeline-event">
        <p className="career__timeline-title">{title}</p>
        {descriptions.map((desc, i) => (
          <p key={i} className="career__timeline-description">
            {desc}
          </p>
        ))}
      </div>
    </li>
  );
}
