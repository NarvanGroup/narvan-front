import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Logo = ({ src }) => {
  const router = useRouter();

  // destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  const defaultLogo =
    router.locale === "fa"
      ? "/images/Logo_farsi.png"
      : "/images/Logo_Narvan - English.png";

  return (
    <Link
      href={base_url}
      className="navbar-brand block py-1"
      style={{
        height: logo_height.replace("px", "") + "px",
        width: logo_width.replace("px", "") + "px",
      }}
    >
      {src || logo ? (
        <Image
          width={logo_width.replace("px", "")}
          height={logo_height.replace("px", "")}
          src={src ? src : defaultLogo}
          alt={title}
          priority
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
