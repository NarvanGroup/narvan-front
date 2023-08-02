import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import { useTranslation } from 'react-i18next';
import NarvanProducts from 'views/HomePage/NarvanProducts';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="description" content="Narvan Group" />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <NarvanProducts />
          <BasicSection imageUrl="/demo-illustration-1.svg" title={t('Your Trusted Partner in Global Trade')} overTitle={t('about Narvan')}>
            <p>{t('about Narvan text')}</p>
          </BasicSection>
          <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title={t('with Narvan everything is possible')}
            overTitle={t('Why Choose Narvan?')}
            reversed
          >
            <ul>
              <li>
                <strong>{t('Global Reach')}: </strong>
                <p>{t('Global Reach Text')}</p>
              </li>
              <li>
                <strong>{t('Expert Team')}: </strong>
                <p>{t('Expert Team Text')}</p>
              </li>
              <li>
                <strong>{t('Tailored Solutions')}: </strong>
                <p>{t('Tailored Solutions Text')}</p>
              </li>
              <li>
                <strong>{t('Quality Assurance')}: </strong>
                <p>{t('Quality Assurance Text')}</p>
              </li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
          {/* <Features /> */}
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps(context: { locale: any }) {
  const { locale } = context;
  return {
    props: {
      posts: await getAllPosts(),
      ...(await serverSideTranslations(locale)),
    },
  };
}
