import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';

import Home from './pages/Home';
import MyNetwork from './pages/MyNetwork';
import Jobs from './pages/Jobs';
import Notifications from './pages/Notifications';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

function App() {
  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   const response = await fetch(
  //     'https://jsonplaceholder.typicode.com/posts/10'
  //   );
  //   const postsData = await response.json();
  //   console.log(postsData);
  // }

  return (
    <>
      <Router>
        <div className='main'>
          <Navbar />

          <div className='main-body'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/mynetwork' element={<MyNetwork />}></Route>
              <Route path='/jobs' element={<Jobs />}></Route>
              <Route path='/messaging' element={<Home />}></Route>
              <Route path='/notifications' element={<Notifications />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
