import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Posts = ({ posts }) => {
  const { blog_folder, summary_length } = config.settings;
  const { t } = useTranslation();

  return (
    <div className="section row pb-0">
      <div className="col-12 pb-12 lg:pb-24">
        <div className="row items-center">
          <div className="col-12 md:col-6">
            {posts[0]?.images && posts[0]?.images[0] && (
              <Image
                className="h-auto w-full rounded-lg"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${posts[0]?.images[0]}`}
                alt={posts[0].name}
                width={540}
                height={227}
                priority={true}
              />
            )}
          </div>
          <div className="col-12 md:col-6">
            <h2 className="h3 mb-2 mt-4">
              <Link
                href={`/blogs/${posts[0]?.slug}`}
                className="mb-8 block hover:text-primary"
              >
                {posts[0]?.name_fa}
              </Link>
            </h2>
            <p className="text-text">
              {plainify(
                posts[0]?.description?.slice(0, Number(summary_length)),
                "div"
              )}
            </p>
            <Link
              className="btn btn-primary mt-4"
              href={`/${blog_folder}/${posts[0]?.slug}`}
              rel=""
            >
              {t("Read More")}
            </Link>
          </div>
        </div>
      </div>
      {posts?.slice(1)?.map((post, i) => (
        <div key={`key-${i}`} className="col-12 mb-8 sm:col-6 lg:col-4">
          {post.images[0] && (
            <Image
              className="rounded-lg"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${post.images[0]}`}
              alt={post.name}
              width={i === 0 ? "925" : "445"}
              height={i === 0 ? "475" : "230"}
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
      ))}
    </div>
  );
};

export default Posts;
