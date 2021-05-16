import tw, { styled } from 'twin.macro';

const StyledDiv = styled.div`
  ${props => props.margin}
`;

const Spacer = ({ children, pt = 4, pb = 4, pr = 4, pl = 4 }) => (
  <div className={`pt-${pt} pb-${pb} pl-${pl} pr-${pr}`}>{children}</div>
);

export default Spacer;
