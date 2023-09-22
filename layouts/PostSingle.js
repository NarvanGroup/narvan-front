import { markdownify, plainify } from "@lib/utils/textConverter";

import Image from "next/image";
import Base from "./Baseof";

const PostSingle = ({ post }) => {
  return (
    <Base title={post?.name} description={post?.description}>
      <section className="section">
        <div className="container">
          <div className="row">
            <article className="col-12 mx-auto text-center md:col-8">
              {post?.images[0] && (
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
              {markdownify(post.name, "h1", "h2 mb-6 mt-6 text-center")}

              <div className="content mb-16 text-left">
                <p className="text-text">{plainify(post.content)}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
