import React, { useContext } from "react";
import HomeHeader from "./HomeHeader";
import NavLogin from "../Nav/NavLogin";
import NavMain from "../Nav/NavMain";
import AboutProject from "./AboutProject";
import HomeThreeColumns from "./HomeThreeColumns";
import AboutUs from "./AboutUs";
import HomeOrganizations from "./HomeOrganizations";
import HomeContact from "./HomeContact";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import UserContext from "../context";

const Home = () => {
  // const loggedUser = useContext(userContext);
  return (
    <>
      <HomeHeader>
        <nav className="home__nav">
          <UserContext.Consumer>
            {(value) => <NavLogin user={value} />}
          </UserContext.Consumer>
          <NavMain />
        </nav>
      </HomeHeader>
      <AboutProject>
        <HomeThreeColumns />
      </AboutProject>
      <AboutUs />
      <HomeOrganizations />
      <HomeContact contactForm={<ContactForm />} footer={<Footer />} />
    </>
  );
};

export default Home;
