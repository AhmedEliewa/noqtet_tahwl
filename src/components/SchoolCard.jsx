import { Link } from "react-router";

const SchoolCard = ({ school }) => {
  return (
    <div className="w-[300px] h-[380px] border rounded-xl p-4 shadow hover:shadow-lg transition text-center flex flex-col justify-between">
      <div>
        <img
          src={school.image_url}
          alt={school.name}
          className="w-full h-[180px] object-cover rounded mb-3"
        />
        <h2 className="text-xl font-semibold mb-1 text-[#48cae4]">
          {school.name}
        </h2>
        <p className="text-sm text-[#cbd5e1]">{school.governorate}</p>
      </div>

      <Link
        to={`/school/${school.id}`}
        className="text-[#5eead4] font-medium hover:underline mt-4"
      >
        عرض التفاصيل
      </Link>
    </div>
  );
};

export default SchoolCard;
