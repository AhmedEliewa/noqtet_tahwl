const FilterBar = ({ selectedGovernorate, setSelectedGovernorate }) => {
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
    "الوادي الجديد",
    "بني سويف",
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
      <select
        value={selectedGovernorate}
        onChange={(e) => setSelectedGovernorate(e.target.value)}
        className="p-2 rounded border"
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
