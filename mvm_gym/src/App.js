import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from './Pages/landing';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/home';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          {/* <Route path='phone/verify' element={<PhoneVerify />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
