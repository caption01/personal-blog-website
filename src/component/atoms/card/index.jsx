import tw, { styled } from 'twin.macro';
import ImageCover from '../images';
import Button from '../button';

const Layout = styled.div`
  ${tw`m-8 p-8 shadow-md`}
`;

const CardLayout = styled.div`
  ${tw`relative w-full h-full `}
`;

const CardImageLayout = styled.div`
  ${tw`relative`}
  width: ${props => (props.width ? `${props.width}px` : tw`w-full`)};
  height: ${props => (props.height ? `${props.height}px` : tw`h-80`)};
`;

const CardFooter = styled.div`
  ${tw`flex justify-center w-full h-20 mt-8`}
`;

const Card = ({ src, alt = 'image', height, width, onClick }) => {
  const ratio = 16 / 9;
  const calWidth = width || height * ratio;
  const calHeigth = height || width / ratio;

  return (
    <Layout>
      <CardLayout>
        <CardImageLayout height={height && calHeigth} width={width && calWidth}>
          <ImageCover src={src} alt={alt} />
        </CardImageLayout>
        <CardFooter>
          <Button title="Open" onClick={onClick} />
        </CardFooter>
      </CardLayout>
    </Layout>
  );
};

export default Card;
