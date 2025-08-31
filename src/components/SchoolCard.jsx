export default function SchoolCard({ school }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={school.image} alt={school.name} />
      </div>
      <div className="card-body">
        <h2>{school.name}</h2>
        <p>{school.address}</p>
        <p>{school.city}</p>
      </div>
    </div>
  );
}
