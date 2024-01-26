import Footer from "../Footer/Footer";
import ViewCourse from "../ViewCourse/ViewCourse";
import SearchBar from "../Header/SearchBar";
import NavBar from "../Header/NavBar";
import "./home.css";
import { useEffect, useState } from "react";

function Home() {

    const [tags, setTags] = useState([]);
    const [language, setLanguage] = useState("english");

    const getTagName = (tagId) => {
        for (const tagsArray of tags) {
            for (const tag of tagsArray) {
                if (tag?.tagId === tagId) {
                    if (language === "hindi") {
                        return tag?.name?.hindi;
                    } else {
                        return tag?.name?.english;
                    }
                }
            }
        }
        return "";
    };

    useEffect(() => {
        fetchTags();
    }, []);

    const fetchTags = async () => {
        try {
            let res = await (await fetch("https://api.acharyaprashant.org/v2/legacy/courses/tags")).json();
            setTags(res);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="home">
            <NavBar setLanguage={setLanguage} language={language} getTagName={getTagName}></NavBar>
            <SearchBar getTagName={getTagName}></SearchBar>
            <ViewCourse getTagName={getTagName} language={language}></ViewCourse>
            <Footer getTagName={getTagName}></Footer>
        </div>
    );
}

export default Home;