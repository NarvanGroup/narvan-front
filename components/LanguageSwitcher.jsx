import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <select
      onChange={(e) =>
        router.push(
          {
            pathname: router.pathname,
            query: router.query,
          },
          null,
          { locale: e.target.value }
        )
      }
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
      <option value="ch">chinese</option>
    </select>
  );
}
