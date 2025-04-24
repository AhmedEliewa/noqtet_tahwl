import { Link, useParams } from "react-router";
import schools from "../data/schoolsData";

const SchoolDetails = () => {
  const { id } = useParams();
  const school = schools.find((s) => s.id === parseInt(id));

  if (!school)
    return (
      <div className="text-center p-10 text-[#ef4444] font-bold">
        School not found
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 shadow-md rounded-lg text-center bg-[#053860] text-[#f1f5f9]">
      <div className="w-72 h-72 m-auto mb-4">
        <img
          src={school.image_url}
          alt={school.name}
          className="w-[100%] object-cover rounded-xl"
        />
      </div>
      <h1 className="text-3xl text-[#48cae4] font-bold mb-2">{school.name}</h1>
      <p className="text-[#cbd5e1] mb-2">{school.description}</p>
      <div className="mt-4 space-y-2 text-[#cbd5e1]">
        <p>
          <strong className="text-[#f1f5f9]">المحافظة:</strong>{" "}
          {school.governorate}
        </p>

        {school.address !== "" && (
          <p>
            <strong className="text-[#f1f5f9]">العنوان:</strong>{" "}
            {school.address}
          </p>
        )}
        {school.phone !== "" && (
          <p>
            <strong className="text-[#f1f5f9]">رقم التليفون:</strong>{" "}
            {school.phone}
          </p>
        )}

        {school.specialization !== "" && (
          <p>
            <strong className="text-[#f1f5f9]">التخصصات:</strong>{" "}
            {school.specialization.join(", ")}
          </p>
        )}
        {school.website && (
          <p>
            <strong className="text-[#f1f5f9]">لينك الفيسبوك:</strong>
            <a
              href={school.website}
              target="_blank"
              className="text-[#48cae4] underline mr-3"
            >
              {"..." + school.website.slice(0, 20)}
            </a>
          </p>
        )}
        {school.map_link && (
          <p>
            <strong className="text-[#f1f5f9]">العنوان:</strong>{" "}
            <a
              href={school.map_link}
              target="_blank"
              className="text-[#48cae4] underline"
            >
              عرض على خرائط جوجل
            </a>
          </p>
        )}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-[#0466c8] text-lg font-semibold">
          &larr; الرجوع الى الصفحه الرئيسيه
        </Link>
      </div>
    </div>
  );
};

export default SchoolDetails;
