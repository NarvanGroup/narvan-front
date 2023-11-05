import { ProductCard } from "components/ProductCard";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export const ProductsSwiper = ({ products }) => {
  return (
    <section className="section">
      <div className="container">
        <div className={`service-carousel md:order-2`}>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            init={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            <div className="section row pb-0">
              {products?.map((p, i) => (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      height: "480px",
                      paddingBottom: "16px",
                    }}
                    className="box-shadow-1 radius-10 m-8 p-8"
                  >
                    <ProductCard product={p} />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
