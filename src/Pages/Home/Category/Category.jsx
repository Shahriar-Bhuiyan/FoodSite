import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const categories = [
  {
    name: "Salad",
    image: slide1
  },
  {
    name: "pizza",
    image: slide2
  },
  {
    name: "Soup",
    image: slide3
  },
  {
    name: "Cake",
    image: slide4
  },
  {
    name: "Salad",
    image: slide5
  }
];

function Category() {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={"From 11.00 AM to 10.00 PM"}
          heading={"Order Online"}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper mb-20"
        >
          {categories.map((category, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <img src={category.image} alt={category.name} />
                  <h3 className="text-4xl text-white -mt-[80px] font-extrabold text-center uppercase">
                    {category.name}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default Category;
