import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Optional: for pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // 👈 Add Autoplay
import pic5 from "/pic5.jpeg";
import pic2 from "/pic2.jpg";
import pic3 from "/pic3.jpg";
import pic4 from "/pic4.jpg";

const Slider = () => {
  return (
    <div className="w-full max-w-6xl flex mx-auto mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // 👈 Include Autoplay here
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // 👈 3 seconds
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src={pic5}
            alt="Slide 1"
            className="w-full h-[500px] xl:h-[600px] rounded-xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic2}
            alt="Slide 2"
            className="w-full h-[500px] xl:h-[600px] rounded-xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic3}
            alt="Slide 3"
            className="w-full h-[500px] xl:h-[600px] rounded-xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pic4}
            alt="Slide 4"
            className="w-full h-[500px] xl:h-[600px] rounded-xl object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
