import React from 'react'
import { Link } from "react-router-dom";

// components
import Navigation from "../Navigation";
import RecipeSlideShow from '../RecipeSlideShow';
import ReachOutForm from "../ReachOutForm";
import Footer from "../Footer";

// style sheets
import "./homeScreen.css";

/*
Link usage: 
<Link to="/a7/notifications" className={`list-group-item list-group-item-action ${active === 'notifications' ?  'active': ''}`}>
  <i className="fas fa-bell wd-float me-2"></i>
  <span className="d-none d-xl-inline">
    Notifications
  </span>
</Link>
*/


// access images using --> images/someFile, this will automatically detect an image in the images folder in the public directory

const HomeScreen = () => {
  return (
    <>
      <Navigation />
      <RecipeSlideShow />
      <ReachOutForm />
      <Footer />
    </>
  );
}


export default HomeScreen;



