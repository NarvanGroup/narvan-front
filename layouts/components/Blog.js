import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { parseMDX } from "@lib/utils/mdxParser";
import { markdownify, plainify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
import { getBlogsService } from "api/services/blogs";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const { blog_folder } = config.settings;

// blog pagination
const Blog = () => {
  const title = "Latest news";
  const { t } = useTranslation();

  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const result = await getBlogsService();
      if (result) {
        setBlogs(result.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section className="section">
      <div className="container">
        {markdownify(t(title), "h1", "h1 text-center font-normal text-[56px]")}
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
              {blogs?.map((post, i) => (
                <SwiperSlide key={i}>
                  <div key={`key-${i}`} className="m-4">
                    {post?.images[0] && (
                      <Image
                        className="blogImage rounded-lg"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${post.images[0]}`}
                        alt={post.name}
                        width={"445"}
                        height={"230"}
                      />
                    )}
                    <h2 className="h3 mb-2 mt-4">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="block hover:text-primary"
                      >
                        {post.name}
                      </Link>
                    </h2>
                    <p className="text-text">{plainify(post.description)}</p>

                    <Link
                      className="btn btn-primary mt-4"
                      href={`/blogs/${post.slug}`}
                      rel=""
                    >
                      {t("Read More")}
                    </Link>
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

export default Blog;
