import { createContext, useState } from 'react';

const ContentContext = createContext();
export const ContentProvider = ({ children }) => {
  const [userFeed, setUserFeed] = useState([]);

  return (
    <ContentContext.Provider
      value={{
        userFeed,
        setUserFeed,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;
