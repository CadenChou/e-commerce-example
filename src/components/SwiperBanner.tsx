import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

export default function SwiperBanner() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      {/* <SwiperSlide>
        <div className="relative w-screen h-[65vh]">
          <img src={banner1} alt="Banner 1" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">Text Overlay 1</h2>
            <p className="text-lg">Description of Image 1</p>
          </div>
        </div>
      </SwiperSlide> */}
      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative w-screen h-[65vh]">
          <img src={banner2} alt="Banner 2" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 text-white flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">Spring Collection</h2>
            <p className="text-lg">
              Indulge in the essence of springtime elegance
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative w-screen h-[65vh]">
          <img src={banner3} alt="Banner 3" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 text-white flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">
              Luxury and Elegance, Redefined
            </h2>
            <p className="text-lg">
              Experience refined craftsmanship, timeless sophistication, and
              unparalleled quality.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
