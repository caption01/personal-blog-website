import tw, { styled } from 'twin.macro';

import { FullScreenContainer } from '@/atoms/index';

const Grids = styled.div`
  ${tw`grid grid-cols-1 gap-8 h-full`}
`;

const StyledText = styled.div`
  ${tw`flex flex-col justify-center items-center space-y-12
    text-7xl font-extrabold 
  `}

  line-height: 8rem;
`;

const LandingTemplate = ({ children }) => (
  <FullScreenContainer>
    <Grids>
      <StyledText>{children}</StyledText>
    </Grids>
  </FullScreenContainer>
);

export default LandingTemplate;
