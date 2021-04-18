import { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';

const createTimeline = (renderItems, setStateItems, cb) => {
  let start = 0;
  const show = 2000;
  const next = 3000;

  const mapFn = renderItems.reduce((acc, item, index) => {
    const isLast = index === renderItems.length - 1;

    const fadeIn = setTimeout(() => setStateItems(item), start);
    const fadeOut = !isLast
      ? setTimeout(() => setStateItems([]), start + show)
      : setTimeout(() => {
          setStateItems([]);
          cb();
        }, start + show);

    acc = [...acc, fadeIn, fadeOut];

    start += next;

    return acc;
  }, []);

  return mapFn;
};

const useFadeInFadeOut = ({ renderItems, onFinish, finished }) => {
  const ref = useRef([]);
  const [items, setItems] = useState([]);

  const transitions = useTransition(items, null, {
    from: {
      opacity: 0.4,
      transform: 'translateY(2rem)'
    },
    enter: [{ opacity: 1, transform: 'translateY(0)' }],
    leave: [{ opacity: 0, transform: 'translateY(-2rem)' }]
  });

  const refresh = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    setItems([]);
    onFinish(false);

    const renderFnMap = createTimeline(renderItems, setItems, () =>
      onFinish(true)
    );
    ref.current = renderFnMap;
  }, []);

  useEffect(() => refresh(), []);

  useEffect(() => {
    if (!finished) return;
    ref.current.map(clearTimeout);
    ref.current = [];
    setItems([]);
  }, [finished]);

  const FadedComponent = () => (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {item}
        </animated.div>
      ))}
    </>
  );

  return [FadedComponent, refresh];
};

export default useFadeInFadeOut;
