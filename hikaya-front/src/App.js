import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout"; // esraa

import Landing from "./pages/landingpage";
import "./App.css"; // Global styles
import WriteStory from "./components/story_components/writeStory";
import ReadStory from "./components/readStory/readStory";
//omar
import Header from "./components/landing_page/Header";
import Contact from "./pages/Contact_us";
import About from "./pages/About_Us";
import MainPage from "./pages/MainPage";
import Footer from "./components/landing_page/Footer";
import Register from "./components/Auth/Register";
import Story from "./components/story_components/writeStory";
import Profile from "./pages/UserProfile";
import EditProfile from "./components/UserProfile/EditProfile";
import ProfileContent from "./components/UserProfile/ProfileContent";
import { AuthProvider } from "./pages/AuthContext"; // Import AuthProvider
import Chatbot from "./components/AI/Chatbot";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/write_story" element={<Story />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/profile-content" element={<ProfileContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<MainPage />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/readStory/:id" element={<ReadStory />} />
            
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
    //   <Router>
    //     <div className="app-container">
    //       <Header /> {/* Always visible */}
    //       <nav className="nav-bar">
    //         <Link to="/" className="nav-link">
    //           Home
    //         </Link>
    //         <Link to="/login" className="nav-link">
    //           Login
    //         </Link>
    //         <Link to="/register" className="nav-link">
    //           Register
    //         </Link>
    //       </nav>
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/register" element={<Register />} />
    //       </Routes>
    //       <Footer />
    //     </div>
    //   </Router>
  );
}

function Home() {
  return (
    <div className="home-container">{/* <Landing /> */}</div>
    // <div className="App">
    //   <Header />
    //   <Hero />
    //   <Features />
    //   <Pricing />
    //   <Footer />
    // </div>
    //
    //<ReadStory></ReadStory>
  );
}

export default App;
