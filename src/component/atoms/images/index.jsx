import Image from 'next/image';
import tw, { styled } from 'twin.macro';

const ImageCover = ({ src, alt }) => (
  <Image alt={alt} src={src} layout="fill" objectFit="contain" />
);

export default ImageCover;
