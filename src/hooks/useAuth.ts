import { fbAuth } from "../services/firebase";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [idToken, setIdToken] = useState<string | undefined>();
  const [isSignedIn, setSignedIn] = useState<boolean | undefined>();

  useEffect(() => {
    const unsubscribe = fbAuth.onIdTokenChanged(async (user) => {
      if (!user) {
        setSignedIn(false);
        return;
      }
      const token = await user.getIdToken();
      setIdToken(token);
      setSignedIn(true);
    });
    return () => unsubscribe();
  }, []);

  return {
    idToken,
    isSignedIn,
  };
};

export default useAuth;
