import AboutUS from "../../Component/AboutUS";
import Banner from "../../Component/Banner";
import Contact from "../../Component/Contact";
import MyServices from "../../Component/MyServices";
import Portfolio from "../../Component/Portfolio";
import Skills from "../../Component/Skills";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUS></AboutUS>
            <MyServices></MyServices>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;