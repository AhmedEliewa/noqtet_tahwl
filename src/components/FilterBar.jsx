import { useSearchParams } from "react-router";

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedGovernorate = searchParams.get("gov") || "";

  const governorates = [
    "الإسماعيلية",
    "القليوبية",
    "الإسكندرية",
    "دمياط",
    "كفر الشيخ",
    "الدقهلية",
    "البحر الأحمر",
    "سيناء",
    "القاهرة",
    "المنوفية",
    "البحيرة",
    "الجيزة",
    "الفيوم",
    "الغربية",
    "الشرقية",
    "أسوان",
    "أسيوط",
    "المنيا",
    "مطروح",
    "الاقصر",
    "قنا",
    "سوهاج",
    "بورسعيد",
    "السويس",
    "الوادي الجديد",
    "بني سويف",
  ];

  const handleChange = (e) => {
    const gov = e.target.value;
    if (gov) {
      searchParams.set("gov", gov);
    } else {
      searchParams.delete("gov");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
      <select
        value={selectedGovernorate}
        onChange={handleChange}
        className="p-2 rounded border max-w-[170px] mx-auto"
      >
        <option value="">كل المحافظات</option>
        {governorates.map((gov) => (
          <option key={gov} value={gov}>
            {gov}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
