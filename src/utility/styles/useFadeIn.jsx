import { useSpring, animated } from 'react-spring';
import tw, { styled } from 'twin.macro';

const StyledDiv = styled.div``;

const useFadeIn = WrapperComponent => wrapperProps => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  return (
    <StyledDiv>
      <animated.div style={props}>
        <WrapperComponent {...wrapperProps} />
      </animated.div>
    </StyledDiv>
  );
};

export default useFadeIn;
