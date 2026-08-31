const sponsors = [
  "University of Waterloo",
  "Velocity",
  "Socratica",
  "Arts Build Ontario",
  "Lumière",
  "Nuit Blanche",
  "Our community",
];

export default function Sponsors() {
  return (
    <section className="sponsors section container">
      <h2>a thank you to our sponsors.</h2>
      <div className="sponsor-grid">
        {sponsors.map((name, index) => (
          <div className="sponsor" key={name}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p>{name}</p>
          </div>
        ))}
      </div>
      <p className="large-copy">
        we are grateful for your support that has made it possible for us to
        continue to build up this community of creatives.
      </p>
    </section>
  );
}
