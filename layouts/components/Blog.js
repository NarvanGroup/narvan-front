import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { parseMDX } from "@lib/utils/mdxParser";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const { blog_folder } = config.settings;
console.log({ blog_folder });

// blog pagination
const Blog = ({ postIndex, posts, currentPage, pagination }) => {
  console.log({ posts });
  const { t } = useTranslation();

  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter, content } = postIndex;
  const { title } = frontmatter;

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
              {posts.slice(1).map((post, i) => (
                <SwiperSlide key={i}>
                  <div key={`key-${i}`} className="m-4">
                    {post.frontmatter.image && (
                      <Image
                        className="rounded-lg"
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        width={i === 0 ? "925" : "445"}
                        height={i === 0 ? "475" : "230"}
                      />
                    )}
                    <h2 className="h3 mb-2 mt-4">
                      <Link
                        href={`/${blog_folder}/${post.slug}`}
                        className="block hover:text-primary"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="text-text">{post.frontmatter.desc}</p>
                    <Link
                      className="btn btn-primary mt-4"
                      href={`/${blog_folder}/${post.slug}`}
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
