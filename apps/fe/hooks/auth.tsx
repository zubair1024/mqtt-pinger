import React, { useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState<boolean>(true);
  return {
    isLoggedIn,
  };
};

export default useAuth;
