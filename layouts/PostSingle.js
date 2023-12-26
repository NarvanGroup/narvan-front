import { markdownify, plainify } from "@lib/utils/textConverter";

import Image from "next/image";

const PostSingle = ({ post }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <article className="col-12 mx-auto text-center md:col-8">
            {post?.images && post?.images[0] && (
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${post.images[0]}`}
                alt={post.name}
                height="500"
                width="1000"
                priority={true}
                layout="responsive"
                className="rounded-lg"
              />
            )}

            {console.log({ post })}
            {markdownify(post?.name_fa, "h1", "h2 mb-6 mt-6 text-center")}

            <div className="content mb-16 text-left">
              <p
                style={{
                  textAlign: "right",
                }}
                className="text-text"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: post?.content,
                  }}
                ></div>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PostSingle;
