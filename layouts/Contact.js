import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className="section">
      <div className="container">
        {markdownify(t(title), "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <Image
              className="m-auto"
              alt="contact us"
              src="/images/contact.svg"
              width={400}
              height={400}
            />
            {/* <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {t("Send Now")}
              </button>
            </form> */}
          </div>
          <div
            className={`content col-12 md:col-6 lg:col-5 ${
              router.locale !== "fa" && "english-font"
            }`}
          >
            {markdownify(t(info.title), "h4")}
            {markdownify(t(info.description), "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(t(Object.keys(contact)), "strong", "text-dark")}:{" "}
                  {markdownify(
                    t(Object.values(contact)),
                    "strong",
                    "text-dark"
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
