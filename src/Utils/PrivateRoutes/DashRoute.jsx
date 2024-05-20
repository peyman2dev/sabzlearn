import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DashRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const user = useSelector((state) => state.server.user.userInfos);

  const filtering = () => {
    if (user.role === "ADMIN") {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
    setIsLoading(false); // Set isLoading to false after filtering
  };

  useEffect(() => {
    if (user) {
      filtering();
    } else {
      setIsLoading(false); // Ensure loading stops even if no user is found
    }
  }, [user]);

  if (isLoading) {
    return "Loading...";
  }

  return isAuthorized ? children : "Unauthorized";
}
