import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Cta({ cta }) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              style={{ borderRadius: "10px" }}
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="direction-column mt-5 flex items-center justify-center text-center md:col-6 lg:col-5 md:mt-0 md:text-left">
            <h2>{t(cta?.title)}</h2>
            {/* <p className="mt-6">{markdownify(cta?.content)}</p> */}
            {cta.button.enable && (
              <a
                className={`btn btn-primary-phone m-4 ${
                  router.locale !== "fa" && "english-font"
                }`}
                href={`tel:+989306057083`}
                target="_blank"
                rel="noreferrer"
              >
                09306057083
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
