import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function CompanyCard({ name, logo, description }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-[1.03] transition cursor-pointer">
      <img src={logo} className="h-20 w-20 object-contain mb-4" />

      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>

      <Button
        className="mt-4"
        onClick={() => navigate(`/companies/${name.toLowerCase()}`)}
      >
        See More
      </Button>
    </div>
  );
}
