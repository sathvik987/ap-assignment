import Footer from "../Footer/Footer";
import ViewCourse from "../ViewCourse/ViewCourse";
import SearchBar from "../Header/SearchBar";
import NavBar from "../Header/NavBar";

import "./home.css";

function Home() {
    return (
        <div className="home">
            <NavBar></NavBar>
            <SearchBar></SearchBar>
            <ViewCourse></ViewCourse>
            <Footer></Footer>
        </div>
    );
}

export default Home;