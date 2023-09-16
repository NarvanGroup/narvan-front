import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  const handleChange = (e) => {
    console.log("first");
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
    <select onChange={handleChange}>
      <option value="en">English</option>
      <option value="fa">فارسی</option>
      <option value="ch">chinese</option>
    </select>
  );
}
