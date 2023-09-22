import Image from "next/image";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  const handleChange = (e) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: e.target.value }
    );
  };

  return (
    <select
      onChange={handleChange}
      class="block w-auto rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    >
      <option selected={router?.locale === "en"} value="en">
        {/* &#127468;&#127463; */}
        English
      </option>
      <option selected={router?.locale === "fa"} value="fa">
        {/* &#x1F1EE;&#x1F1F7;  */}
        فارسی
      </option>
      <option selected={router?.locale === "ch"} value="ch">
        {/* &#x1F1E8;&#x1F1F3;  */}
        chinese
      </option>
    </select>
  );
}
