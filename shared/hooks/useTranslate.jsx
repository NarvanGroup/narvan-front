import { useIntl } from "react-intl";

export const useTranslate = () => {
  const { formatMessage } = useIntl();
  // Define a function called t that takes in a key of type TranslationKey
  (key) => [formatMessage];

  return { t };
};
