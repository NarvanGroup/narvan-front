import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import en from "../../locales/en/common.json";
import fa from "../../locales/fa/common.json";
import ch from "../../locales/ch/common.json";
import { flattenMessages } from "shared/utilities/flattenMessages";

// Union type

// a Record is an object wich we can pass union types to it as key.
const messages = {
  en,
  fa,
  ch,
};

export const useLocale = () => {
  const router = useRouter();

  const flattenedMessages = useMemo(
    () => flattenMessages(messages[router.locale]),
    [router]
  );

  const switchLocale = useCallback(
    (locale) => {
      // if we already have /en and we choose english for example we just return!
      if (locale === router.locale) {
        return;
      }

      // This is how we change locale in NextJS.
      const path = router.asPath;
      return router.push(path, path, { locale });
    },
    [router]
  );
  return {
    locale: router.locale,
    switchLocale,
    messages: messages[router.locale],
  };
};
