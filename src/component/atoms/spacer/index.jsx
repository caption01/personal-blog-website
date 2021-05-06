import tw, { styled } from 'twin.macro';

const StyledDiv = styled.div`
  ${props => props.margin}
`;

const Spacer = ({ children, top = 4, bottom = 4, right = 4, left = 4 }) => {
  // const margin = tw`mt-${top} mb-${bottom} ml-${left} mr-${right}`;
  const margin = tw`mt-4`;
  return <StyledDiv margin={margin}>{children}</StyledDiv>;
};

export default Spacer;
