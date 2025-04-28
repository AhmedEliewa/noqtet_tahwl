import React from "react";
import { motion } from "framer-motion";

const NewsMentions = () => {
  const articles = [
    {
      title: "طلاب إعلام الزقازيق يطلقون مبادرة «نقطة تحول»",
      source: "اليوم السابع",
      url: "https://www.youm7.com/6870033",
    },
    {
      title: "طلاب قسم الإعلام بالزقازيق يطلقون مبادرة هادفة",
      source: "صدى البلد",
      url: "https://www.elbalad.news/6469073",
    },
    {
      title: "مبادرة نقطة تحول من طلاب إعلام الزقازيق",
      source: "أوان مصر",
      url: "https://www.awanmasr.com/?p=1730447",
    },
    {
      title: "طلاب إعلام الزقازيق يطلقون مبادرة توعوية مبتكرة",
      source: "بوابة هنا مصر",
      url: "https://www.hnamser.com/2025/02/blog-post_2.html",
    },
    {
      title: "إطلاق مبادرة من إعلام الزقازيق لصالح المجتمع",
      source: "القاهرية",
      url: "https://alqahria.com/2025/02/02/%d8%b7%d9%84%d8%a7%d8%a8-%d8%a7%d9%84%d8%af%d9%81%d8%b9%d8%a9-40-%d8%a8%d9%82%d8%b3%d9%85-%d8%a5%d8",
    },
    {
      title: "إعلام الزقازيق يطلق مبادرة نوعية لطلاب الدفعة 40",
      source: "خلف الحدث",
      url: "https://khalfelhadth.com/31774",
    },
    {
      title: "طلاب الدفعة 40 بإعلام الزقازيق يطلقون مبادرة نقطة تحول",
      source: "دافنشي",
      url: "https://davinchi-eg.com/%D8%B7%D9%84%D8%A7%D8%A8-%D8%A7%D9%84%D8%AF%D9%81%D8%B9%D8%A9-40-%D8%A8%D9%82%D8%B3%D9%85-%D8%A5%D8%B9%D9%84%D8%A7%D9%85-%D8%A7%D9%84%D8%B2%D9%82%D8%A7%D8%B2%D9%8A%D9%82-%D9%8A%D8%B7%D9%84%D9%82%D9%88/",
    },
    {
      title: "طلاب الزقازيق يطلقون مبادرة إعلامية مميزة",
      source: "روزاليوسف",
      url: "https://rosaelyoussef.com/1269113/",
    },
    {
      title: "نقطة تحول.. مبادرة إعلامية شبابية",
      source: "الجورنال",
      url: "https://eljornal.com/?p=696481",
    },
    {
      title: "طلاب إعلام الزقازيق يطلقون مبادرة 'نقطة تحول'",
      source: "اليوم",
      url: "https://el-yomnews.com/طلاب-إعلام-الزقازيق-يطلقون-مبادرة-نقط/",
    },
  ];

  return (
    <div className="w-full text-center">
      <div className="text-white py-10 px-6 max-w-3xl mx-auto">
        {/* Song Section */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          🎶 استمع إلى أغنيتنا الخاصة بالمبادرة
        </h2>
        <div className="text-center mb-12">
          <a
            href="https://www.facebook.com/share/v/1EQGDApRiw/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff6f61] text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#ff3b2e] transition-all duration-300"
          >
            استمع الآن على فيسبوك
          </a>
        </div>

        {/* Articles Section */}
        <h2 className="text-3xl font-bold mb-10 text-center">
          الصحف التي تحدثت عن مبادرتنا
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#e0f7fa] text-[#053860] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p className="text-sm font-medium">المصدر: {article.source}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMentions;
