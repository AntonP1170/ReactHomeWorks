import {Route, Routes} from "react-router";
import MainPage from "@/Pages/MainPage/MainPage.tsx";
import Header from "@/Components/Header/Header.tsx";
import EnterToReactPage from "@/Pages/EnterToReactPage/EnterToReactPage";
import ComponentPage from "@/Pages/ComponentPage/ComponentPage";

function App() {
    const nameOfpage = sessionStorage.getItem("name");
    return (
        <>
            <Header nameOfPage={nameOfpage}/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path={"/enter-to-react"} element={<EnterToReactPage/>}/>
                <Route path={"/react-components"} element={<ComponentPage/>}/>
            </Routes>
        </>
    );
}

export default App;
