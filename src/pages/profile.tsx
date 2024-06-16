
import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import { useEffect } from "react";

const Profile: React.FC = () => {
  const { user, loginWithRedirect, isLoading, isAuthenticated} = useAuth0();
  useEffect(() => {
    if (isLoading == false) {
      if (!isAuthenticated)
        loginWithRedirect({
          appState: { targetUrl: window.location.pathname },
        });
      }
  }, [isLoading, isAuthenticated, loginWithRedirect]);
  return (
    user && (
      <>
        <div className="flex flex-col items-center mt-10">
          {user.picture && typeof user.picture === "string" && (
            <Image
              src={user.picture}
              alt={user.name || "Name"}
              width={20}
              height={20}
              className="w-20 h-20 rounded-full mb-4"
            />
          )}
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </>
    )
  );
};

export default Profile;
