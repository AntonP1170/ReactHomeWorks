import {Route, Routes} from "react-router";
import MainPage from "@/Pages/MainPage/MainPage.tsx";
import Header from "@/Components/Header/Header.tsx";
import ComponentPage from "@/Pages/ComponentPage/ComponentPage.tsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path={"/homework/react-components"} element={<ComponentPage/>}/>
            </Routes>
        </>
    );
}

export default App;
