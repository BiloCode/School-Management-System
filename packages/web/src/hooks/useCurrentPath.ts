import { useCallback } from "react";
import { useLocation } from "react-router-dom";

import { RoutesKey } from "@configuration/routesKey";

const useCurrentPath = () => {
  const location = useLocation();

  const isCurrentPath = useCallback(
    (path: keyof typeof RoutesKey) => {
      const route = RoutesKey[path];

      if (path === "HOME") {
        return location.pathname === route;
      }

      return location.pathname.includes(route);
    },
    [location]
  );

  return {
    isCurrentPath
  };
};

export default useCurrentPath;
