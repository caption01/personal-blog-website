import tw, { styled } from 'twin.macro';

import { ImageFullCover, Header } from '@/atoms/index';

const LandingLayout = styled.div`
  ${tw`container mx-auto`};
  height: 75vh;
`;

const Grids = styled.div`
  ${tw`grid grid-cols-2 gap-8 h-full`}
`;

const TextContent = styled.div`
  ${tw`flex flex-col justify-center items-center space-y-12`}
`;

const LandingTemplate = () => (
  <LandingLayout>
    <Grids>
      <TextContent>
        <Header>Hello</Header>
        <Header>I'm Nutchapon</Header>
        <Header>I'm Developer</Header>
        <Header>I'm Love Dog Lover</Header>
      </TextContent>
      <ImageFullCover imageSrc="/profile-1.jpg" />
    </Grids>
  </LandingLayout>
);

export default LandingTemplate;
