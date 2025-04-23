const About = () => (
  <div className="max-w-4xl mx-auto my-12 px-6 py-12 bg-gradient-to-br from-green-50 to-white shadow-xl rounded-2xl animate-fade-in">
    <h1 className="text-4xl font-extrabold text-green-800 mb-6 border-b-4 border-green-400 inline-block pb-2">
      نبذة مختصرة
    </h1>
    <p className="text-lg leading-loose text-gray-700 tracking-wide">
      <span className="text-green-600 font-semibold">
        مبـادرة نُقـطـة تَحـوُّل:
      </span>{" "}
      تهدف لنشر الوعي في المجتمع بأهمية التكنولوجيا النظيفة، والجمع بشكل أساسي
      بين
      <span className="text-green-700 font-medium">
        {" "}
        (البيئة - الصناعه - التعليم الفني والتكنولوجي)
      </span>
      ؛ لتحقيق الإستدامة
      <span className="text-green-500 font-bold"> [رؤية مصر 2030]</span>.
      <br />
      <span className="text-green-800 font-semibold">
        #تعليم_يُغيـر_استدامة_تُعمـر
      </span>
    </p>
  </div>
);

export default About;
