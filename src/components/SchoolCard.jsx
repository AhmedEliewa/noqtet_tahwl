import { Link } from "react-router";

const SchoolCard = ({ school }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition text-center">
      <img
        src={school.image_url}
        alt={school.name}
        className="h-56 w-56 object-cover rounded mb-2 mx-auto"
      />
      <h2 className="text-xl font-semibold mb-1  text-[#48cae4]">
        {school.name}
      </h2>
      <p className="text-sm text-[#cbd5e1]">{school.governorate}</p>
      <Link
        to={`/school/${school.id}`}
        className="text-[#5eead4] mt-2 inline-block"
      >
        عرض التفاصيل
      </Link>
    </div>
  );
};

export default SchoolCard;
