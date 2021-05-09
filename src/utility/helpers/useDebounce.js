import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

// fix this or remove
const useDebounce = (fn, delay) => {
  debounce(fn, delay);
};

export default useDebounce;
