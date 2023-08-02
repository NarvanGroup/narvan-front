import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { SingleArticle } from 'types';
import { media } from 'utils/media';
import BasicCard from 'components/BasicCard';
import { useTranslation } from 'react-i18next';

interface ScrollableBlogPostsProps {
  posts: SingleArticle[];
}

export default function NarvanProducts({ posts }: ScrollableBlogPostsProps) {
  const { t } = useTranslation();

  const [hasMounted, setHasMounted] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const oneItemWidth = 350;
  const noOfItems = width / oneItemWidth;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const PARTNER_LOGOS = [
    'logoipsum-logo-1.svg',
    'logoipsum-logo-2.svg',
    'logoipsum-logo-3.svg',
    'logoipsum-logo-4.svg',
    'logoipsum-logo-5.svg',
    'logoipsum-logo-6.svg',
    'logoipsum-logo-7.svg',
  ];

  return (
    <Section>
      <Container>
        <Content>
          <OverTitle>{t('products')}</OverTitle>
          <SectionTitle>What are you signing in for?</SectionTitle>
        </Content>
      </Container>

      <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{ delay: 8000 }}
            centeredSlides
            navigation
            loop
          >
            {FEATURES.map((singleFeature) => (
              <SwiperSlide key={singleFeature.title}>
                <BasicCard key={singleFeature.title} {...singleFeature} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperContainer>
    </Section>
  );
}

const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 250em;
  height: 46rem;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'product No 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  },
];
