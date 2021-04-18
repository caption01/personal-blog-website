import { useTransition, animated } from 'react-spring';

const useFadeIn = WrapperComponent => ({ active, ...wrapperProps }) => {
  const transitions = useTransition(active, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 }
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              onMouseMove={() => console.log('scale up and slide')}
            >
              <WrapperComponent {...wrapperProps} />
            </animated.div>
          )
      )}
    </>
  );
};

export default useFadeIn;
