import tw, { styled } from 'twin.macro';

import { TextAnimated } from '@/utility/styles';

const LandingLayout = styled.div`
  ${tw`container mx-auto`};
  height: 75vh;
`;

const Grids = styled.div`
  ${tw`grid grid-cols-1 gap-8 h-full`}
`;

const TextContent = styled.div`
  ${tw`flex flex-col justify-center items-center space-y-12`}
`;

const LandingTemplate = () => (
  <LandingLayout>
    <Grids>
      <TextContent>
        <TextAnimated />
      </TextContent>
    </Grids>
  </LandingLayout>
);

export default LandingTemplate;
