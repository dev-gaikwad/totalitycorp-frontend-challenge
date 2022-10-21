import { createContext, useState, useEffect } from 'react';

const ContentContext = createContext();
export const ContentProvider = ({ children }) => {
  const [post, setPost] = useState();

  //   useEffect(() => {
  //     function getPosts() {
  //       const response = fetch('https://jsonplaceholder.typicode.com/posts');
  //       const postsData = response.json();
  //       console.log(postsData);
  //       //   setPost(postsData);
  //     }

  //     getPosts();
  //   }, []);
  //   console.log(post);
  return (
    <ContentProvider
      value={{
        post,
      }}
    >
      {children}
    </ContentProvider>
  );
};

export default ContentContext;
