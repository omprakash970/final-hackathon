import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function CompanyCard({ name, logo, description }) {
  const navigate = useNavigate();

  return (
    <div className="card card-hover">
      <img src={logo} className="card-logo" />
      <h2 className="card-title">{name}</h2>
      {description && <p className="card-text">{description}</p>}
      <div className="mt-4">
        <Button onClick={() => navigate(`/companies/${name.toLowerCase()}`)}>
          See More
        </Button>
      </div>
    </div>
  );
}
