export default function Heading({ label, title, text, center }) {
  return (
    <div className={`heading${center ? ' center' : ''}`}>
      {label && <span className="eyebrow">{label}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
