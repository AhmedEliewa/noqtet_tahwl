import { Link, useParams } from "react-router";
import schools from "../data/schoolsData";

const SchoolDetails = () => {
  const { id } = useParams();
  const school = schools.find((s) => s.id === parseInt(id));

  if (!school)
    return (
      <div className="text-center p-10 text-red-500 font-bold">
        School not found
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6  bg-white shadow-md rounded-lg">
      <div className="w-72 h-72 m-auto">
        <img
          src={school.image_url}
          alt={school.name}
          className="w-full object-cover rounded-xl mb-6"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{school.name}</h1>
      <p className="text-gray-700 mb-2">{school.description}</p>
      <div className="mt-4 space-y-2 text-gray-800">
        <p>
          <strong>المحافظة:</strong> {school.governorate}
        </p>

        {school.address !== "" && (
          <p>
            <strong>العنوان:</strong> {school.address}
          </p>
        )}
        {school.phone !== "" && (
          <p>
            <strong>رقم التليفون:</strong> {school.phone}
          </p>
        )}

        {school.specialization !== "" && (
          <p>
            <strong>التخصصات:</strong> {school.specialization.join(", ")}
          </p>
        )}
        {school.website && (
          <p>
            <strong>لينك الفيسبوك:</strong>
            <a
              href={school.website}
              target="_blank"
              className="text-blue-600 underline"
            >
              {school.website}
            </a>
          </p>
        )}
        {school.map_link && (
          <p>
            <strong>العنوان:</strong>{" "}
            <a
              href={school.map_link}
              target="_blank"
              className="text-blue-600 underline"
            >
              عرض على خرائط جوجل
            </a>
          </p>
        )}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-sky-800 text-lg font font-semibold ">
          &larr; الرجوع الى الصفحه الرئيسيه
        </Link>
      </div>
    </div>
  );
};

export default SchoolDetails;
