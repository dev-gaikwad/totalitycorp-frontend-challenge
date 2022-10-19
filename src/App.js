import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import MyNetwork from './layout/MyNetwork';
import Jobs from './layout/Jobs';
import Notifications from './layout/Notifications';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='main'>
          <div className='main-wrap'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/mynetwork' element={<MyNetwork />}></Route>
              <Route path='/jobs' element={<Jobs />}></Route>
              <Route path='/messaging' element={<Home />}></Route>
              <Route path='/notifications' element={<Notifications />}></Route>

              {/* <Route path='/profile' element={<Profile />}></Route>
          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
