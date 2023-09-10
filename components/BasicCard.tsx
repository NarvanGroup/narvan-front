import NextImage from 'next/image';
import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
  name: string;
  farsiName: string;
  price: string;
  specification: [];
}

export default function BasicCard({ name, farsiName, description, imageUrl, specification }: BasicCardProps) {
  return (
    <Card>
      <NextImage src={imageUrl} width={200} height={200} alt={name} />
      <Title>
        {name} - {farsiName}
      </Title>
      <Description>{description}</Description>
      <Specification>{specification?.map((spec, index) => `${spec} `)}</Specification>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.29), 0 3px 22px rgba(0, 0, 0, 0.29);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  // max-width: 200px;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;
  margin: 8px;
  cursor: pointer;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;

const Specification = styled.div`
  border-top: 3px solid var(--border1);
  opacity: 0.6;
  padding-top: 1rem;
  width: 100%;
`;
