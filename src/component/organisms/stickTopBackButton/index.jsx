import tw, { styled } from 'twin.macro';

import { BackButton } from '@/molecules/index';

const ButtonContainer = styled.div`
  ${tw`sticky top-8 ml-20`}
`;

const StickTopBackButton = () => (
  <ButtonContainer>
    <BackButton />
  </ButtonContainer>
);

export default StickTopBackButton;
