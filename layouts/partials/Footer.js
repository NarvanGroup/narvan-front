import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  const router = useRouter();

  const { t } = useTranslation();

  const defaultLogo =
    router.locale === "fa"
      ? "/images/Logo_farsi.png"
      : "/images/Logo_Narvan - English.png";

  return (
    <footer className="footer-container section bg-theme-light pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                {markdownify(t(col.name), "h2", "h4")}
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {t(item.text)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-6">
            <Link href="/" aria-label="narvan e-commerce">
              <Image
                src={defaultLogo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            <a
              target="_blank"
              href="https://trustseal.enamad.ir/?id=521977&Code=FSYNlZQGnKb52twZWj5r4M21L2jZ1LnX"
            >
              <Image
                style={{
                  borderRadius: "8px",
                  marginBottom: "8px",
                }}
                src="/images/enamad.png"
                width={150}
                height={130}
                alt="enamad"
              />
            </a>
            {markdownify(t("footer content"), "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
