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
import Link from 'next/link';

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

  return (
    <Section>
      {categories?.map((cat) => (
        <>
          <Container>
            <Content>
              <OverTitle>{t('products')}</OverTitle>
              <SectionTitle>{cat.title}</SectionTitle>
            </Content>
          </Container>
          <LinkContainer>
            <Link href={`category/${cat.type}`}>{t('see all')}</Link>
          </LinkContainer>

          <SwiperContainer ref={ref}>
            {hasMounted && (
              <Swiper
                modules={[Navigation, Autoplay, A11y]}
                slidesPerView={4}
                spaceBetween={32}
                autoplay={{ delay: 8000 }}
                // centeredSlides
                navigation
                loop
              >
                {cat.products.map((product) => (
                  <SwiperSlide key={product.name}>
                    <BasicCard key={product.name} {...product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </SwiperContainer>
        </>
      ))}
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

const LinkContainer = styled.div`
  margin: 0 5rem;
  font-size: 16px;
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

const nozzleTypes = {
  Single: 'Single',
  Chromed: 'Chromed',
  Double: 'Double',
  HighSpeed: 'HighSpeed',
};

const categoryTypes = {
  nozzles: 'Nozzles',
  weldingNozzle: 'welding Nozzle',
};

const categories = [
  {
    type: categoryTypes.nozzles,
    title: categoryTypes.nozzles,
    farsiName: 'نازل',
    products: [
      {
        name: 'H11 single',
        farsiName: 'نازل تکی',
        type: nozzleTypes.Single,
        price: 'call us',
        imageUrl: '/products/nozzles/H11Single.png',
        specification: ['M11', '11mm', '28mm'],
        description: '',
      },
      {
        name: 'H11 Chromed',
        farsiName: 'نازل کروم دار',
        price: 'call us',
        type: nozzleTypes.Chromed,
        imageUrl: '/products/nozzles/H11Chromed.png',
        specification: ['M11', '11mm', '28mm'],
        description: '',
      },
      {
        name: 'D28 Single',
        farsiName: 'نازل تکی D28',
        price: 'call us',
        type: nozzleTypes.Single,
        imageUrl: '/products/nozzles/D28Single.png',
        specification: ['M11', '15mm', '28mm'],
        description: '',
      },
      {
        name: 'D28 Double Chromed',
        farsiName: 'D28 Double Chromed نازل',
        price: 'call us',
        type: nozzleTypes.Double,
        imageUrl: '/products/nozzles/H11Single.png',
        specification: ['M11', '11mm', '28mm'],
        description: '',
      },
      {
        name: 'D32 Single',
        farsiName: 'D32 Single نازل',
        price: 'call us',
        type: nozzleTypes.Single,
        imageUrl: '/products/nozzles/H11Single.png',
        specification: ['M14', '15mm', '32mm'],
        description: '',
      },
      {
        name: 'D32 Double Chromed',
        farsiName: 'D32 Double Chromed نازل',
        price: 'call us',
        type: nozzleTypes.Single,
        imageUrl: '/products/nozzles/H11Single.png',
        specification: ['M14', '15mm', '32mm'],
        description: '',
      },
      {
        name: 'Hongshan D28 Single',
        farsiName: 'نازل تکی',
        type: nozzleTypes.Single,
        price: 'call us',
        imageUrl: '/products/nozzles/HongshanD28Single.png',
        specification: ['M11', '15mm', '28mm'],
        description: '',
      },
      {
        name: 'D28 Double',
        farsiName: 'نازل دوتایی',
        type: nozzleTypes.Double,
        price: 'call us',
        imageUrl: '/products/nozzles/D28Double.png',
        specification: ['M11', '15mm', '15mm'],
        description: '',
      },
      {
        name: 'High Speed D28 Single',
        farsiName: 'نازل تکی',
        type: nozzleTypes.HighSpeed,
        price: 'call us',
        imageUrl: '/products/nozzles/HighSpeedD28Single.png',
        specification: ['M11', '15mm', '28mm'],
        description: '',
      },
      {
        name: 'High Speed D32 Single',
        farsiName: 'نازل تکی',
        type: nozzleTypes.HighSpeed,
        price: 'call us',
        imageUrl: '/products/nozzles/HighSpeedD32Single.png',
        specification: ['M11', '11mm', '28mm'],
        description: '',
      },
      {
        name: 'High Speed D32 Double Chromed',
        farsiName: 'نازل دوتایی',
        type: nozzleTypes.HighSpeed,
        price: 'call us',
        imageUrl: '/products/nozzles/HighSpeedD32DoubleChromed.png',
        specification: ['M11', '15mm', '28mm'],
        description: '',
      },
      {
        name: 'Straw Hat H11 Single',
        farsiName: '',
        type: nozzleTypes.Single,
        price: 'call us',
        imageUrl: '/products/nozzles/StrawHatH11Single.png',
        specification: ['M11', '11mm', '28mm'],
        description: '',
      },
      {
        name: 'Straw Hat H11 Double Chromed',
        farsiName: '',
        type: nozzleTypes.Single,
        price: 'call us',
        imageUrl: '/products/nozzles/StrawHatH11DoubleChromed.png',
        specification: ['M11', '11mm', '28mm'],
        description: '',
      },
      {
        name: 'Straw Hat D28 Single',
        farsiName: '',
        type: nozzleTypes.Single,
        price: 'call us',
        imageUrl: '/products/nozzles/Straw HatD28Single.png',
        specification: ['M11', '15mm', '28mm'],
        description: '',
      },

      {
        name: 'Straw Hat D32 Double Chromed',
        farsiName: '',
        type: nozzleTypes.Single,
        price: 'call us',
        imageUrl: '/products/nozzles/StrawHatD32DoubleChromed.png',
        specification: ['M14', '15mm', '32mm'],
        description: '',
      },
      {
        name: 'seam Hat D28 Double Chromed',
        farsiName: 'نازل دوتایی',
        type: nozzleTypes.Double,
        price: 'call us',
        imageUrl: '/products/nozzles/seamHatD28DoubleChromed.png',
        specification: ['M11', '15mm', '28mm'],
        description: '',
      },
      {
        name: 'Straw Hat D32 Single',
        farsiName: 'نازل دوتایی',
        type: nozzleTypes.Double,
        price: 'call us',
        imageUrl: '/products/nozzles/StrawHatD32Single.png',
        specification: ['M14', '15mm', '32mm'],
        description: '',
      },
    ],
  },
  {
    type: categoryTypes.weldingNozzle,
    title: categoryTypes.weldingNozzle,
    farsiName: 'نازل جوش',
    products: [
      {
        name: 'Qilin Short A',
        farsiName: '',
        price: 'call us',
        imageUrl: '/products/weldingNozzle/QilinShortA.png',
        specification: ['M10', '25mm', '10mm', '6mm'],
        description: '',
      },
      {
        name: 'Qilin Short B',
        farsiName: '',
        price: 'call us',
        imageUrl: '/products/weldingNozzle/QilinShortA.png',
        specification: ['M10', '25mm', '10mm', '6mm'],
        description: '',
      },
      {
        name: 'Qilin Short C',
        farsiName: '',
        price: 'call us',
        imageUrl: '/products/weldingNozzle/QilinShortA.png',
        specification: ['M10', '25mm', '10mm', '6mm'],
        description: '',
      },
      {
        name: 'Qilin Short D',
        farsiName: '',
        price: 'call us',
        imageUrl: '/products/weldingNozzle/QilinShortA.png',
        specification: ['M10', '25mm', '8.8mm', '6.5mm'],
        description: '',
      },
      {
        name: 'Qilin Short E',
        farsiName: '',
        price: 'call us',
        imageUrl: '/products/weldingNozzle/QilinShortA.png',
        specification: ['M10', '25mm', '3.5mm'],
        description: '',
      },
    ],
  },
];
