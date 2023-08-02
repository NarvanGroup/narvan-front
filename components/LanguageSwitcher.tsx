import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter((locale: string) => locale !== activeLocale && locale !== 'default');

  useEffect(() => {
    let dir = router.locale === 'fa' ? 'rtl' : 'ltr';
    let lang = router.locale ? router.locale : 'en';
    document?.querySelector('html')?.setAttribute('dir', dir);
    document?.querySelector('html')?.setAttribute('lang', lang);
  }, [router.locale]);

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale: string) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={'locale-' + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <a>
                <p
                  style={{
                    fontSize: '16px',
                  }}
                >
                  {locale === 'en' ? 'English' : locale === 'fa' ? 'فارسی' : null}
                </p>
              </a>
            </Link>
          </span>
        );
      })}
    </span>
  );
}
