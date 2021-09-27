import { useCallback, useState } from 'react';

const useActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const onActive = useCallback(() => setActive(() => true), []);
  const onDeactive = useCallback(() => setActive(() => false), []);

  const onToggle = useCallback(() => setActive((active) => !active), []);

  return {
    active,
    onToggle,
    onActive,
    onDeactive
  };
};

export default useActive;
