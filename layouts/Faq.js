import { markdownify } from "@lib/utils/textConverter";
import { useTranslation } from "next-i18next";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container">
        {markdownify(t(title), "h1", "text-center font-normal")}
        <div className="section row  -mt-6">
          {faqs?.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12  shadow">
                <div className="faq-head relative">
                  {markdownify(t(faq.title), "h4")}
                </div>
                {markdownify(t(faq.answer), "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
