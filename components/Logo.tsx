import Image from 'next/image';

export default function Logo({ ...rest }) {
  return <Image width={150} height={100} alt="Narvan Logo" src="/Logos/Logo_english_transparent.png" />;
}
