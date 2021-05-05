import Image from 'next/image';

const ImageCover = ({ src, alt }) => (
  <Image alt={alt} src={src} layout="fill" objectFit="contain" />
);

export default ImageCover;
