import { useEffect, useRef } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { userApi } from "../api/users";

export const useSyncUser = () => {
  const { getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  const syncedUserIdRef = useRef(null);

  useEffect(() => {
    const sync = async () => {
      if (!isLoaded || !isSignedIn || !user?.id) return;
      if (syncedUserIdRef.current === user.id) return;

      try {
        await getToken();
        await userApi.syncUser({
          name: user.fullName || user.username || "Anonymous",
          email: user.primaryEmailAddress?.emailAddress || "",
          profileImage: user.imageUrl || "",
        });

        syncedUserIdRef.current = user.id;
      } catch (error) {
        console.error(
          "Failed to sync user on login",
          error?.response?.data || error,
        );
      }
    };

    sync();

    if (!isSignedIn) {
      syncedUserIdRef.current = null;
    }
  }, [isLoaded, isSignedIn, user, getToken]);
};
