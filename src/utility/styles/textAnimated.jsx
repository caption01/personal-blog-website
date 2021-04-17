import { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import tw, { styled } from 'twin.macro';

const StyledDiv = styled(animated.div)`
  ${() =>
    tw`w-full text-7xl font-extrabold text-center text-black dark:text-white`}
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  line-height: 8rem;
`;

const TextAnimated = () => {
  const ref = useRef([]);
  const [items, set] = useState([]);

  const transitions = useTransition(items, null, {
    from: {
      opacity: 0.4,
      transform: 'translateY(2rem)'
    },
    enter: [{ opacity: 1, transform: 'translateY(0)' }],
    leave: [{ opacity: 0, transform: 'translateY(-2rem)' }]
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['Hi']), 0));
    ref.current.push(setTimeout(() => set([]), 2000));
    ref.current.push(
      setTimeout(() => set(['Welcome', 'To', 'My Spaces']), 3000)
    );
    ref.current.push(setTimeout(() => set([]), 5000));
    ref.current.push(
      setTimeout(() => set(["I'm", 'Develop', 'Web-Application']), 6000)
    );
    ref.current.push(setTimeout(() => set([]), 8000));
    ref.current.push(setTimeout(() => set(['For more info']), 9000));
    ref.current.push(setTimeout(() => set([]), 11000));
    ref.current.push(setTimeout(() => set(['Find Me', 'Below', 'v']), 12000));
  }, []);

  useEffect(() => reset(), []);

  return (
    <StyledDiv>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props} onClick={reset}>
          {item}
        </animated.div>
      ))}
    </StyledDiv>
  );
};

export default TextAnimated;
