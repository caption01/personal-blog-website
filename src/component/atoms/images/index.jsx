import Image from 'next/image';
import tw, { styled } from 'twin.macro';

const ResponseSiveImageContainer = styled.div`
  ${props => tw`w-11/12`}
`;

export const ImageFullCover = ({ imageSrc, alt = 'full-image' }) => (
  <div style={{ position: 'relative' }}>
    <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" />
  </div>
);

export const ImageResponsiveSize = ({ imageSrc, alt = 'static-image' }) => (
  <ResponseSiveImageContainer>
    <Image width={1000} height={1000} alt={alt} src={imageSrc} />
  </ResponseSiveImageContainer>
);

export const ImageCover = ({ src, alt }) => (
  <Image alt={alt} src={src} layout="fill" objectFit="contain" />
);
