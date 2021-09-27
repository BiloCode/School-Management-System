import { useCallback } from "react";
import { useHistory } from "react-router-dom";

const useNavigation = () => {
  const history = useHistory();

  const navigateToHome = useCallback(() => {
    history.push("/");
  }, []);

  const navigateToSharedArea = useCallback(() => {
    history.push("/shared");
  }, []);

  const navigateToClassroom = useCallback(() => {
    history.push("/class");
  }, []);

  const navigateToDiaryAssistance = useCallback(() => {
    history.push("/assistance ");
  }, []);

  return {
    navigateToHome,
    navigateToClassroom,
    navigateToSharedArea,
    navigateToDiaryAssistance
  };
};

export default useNavigation;
