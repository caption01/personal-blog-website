import Image from 'next/image';

export const ImageFullCover = ({ imageSrc }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Image src={imageSrc} layout="fill" objectFit="cover" />
    </div>
  );
};
