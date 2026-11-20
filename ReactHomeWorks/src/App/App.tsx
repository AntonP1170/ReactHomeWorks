import {Route, Routes} from "react-router";
import MainPage from "@/Pages/MainPage/MainPage.tsx";
import Header from "@/Widgets/Header/Header.tsx";
import EnterToReactPage from "@/Pages/EnterToReactPage/EnterToReactPage";
import ComponentPage from "@/Pages/ComponentPage/ComponentPage";
import Footer from "@/Widgets/Footer/Footer.tsx";
import UseStatePage from "@/Pages/UseStatePage/UseStatePage.tsx";
import UseStatePageP2 from "@/Pages/UseStatePageP2/UseStatePageP2";
import ComponentPageP2 from "@/Pages/ComponentPageP2/ComponentPageP2.tsx";

function App() {
    const nameOfpage = sessionStorage.getItem("name");
    return (
        <>
            <Header nameOfPage={nameOfpage}/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path={"/enter-to-react"} element={<EnterToReactPage/>}/>
                <Route path={"/react-components"} element={<ComponentPage/>}/>
                <Route path={"/react-usestate"} element={<UseStatePage/>}/>
                <Route path={"/react-usestate-p2"} element={<UseStatePageP2/>}/>
                <Route path={"/react-components-p2"} element={<ComponentPageP2/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
