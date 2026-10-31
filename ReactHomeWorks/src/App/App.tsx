import {Route, Routes} from "react-router";
import MainPage from "@/Pages/MainPage/MainPage.tsx";
import HomeWorkN1 from "@/Pages/TestHomeWorkPage/HomeWorkN1.tsx";
import Header from "@/Components/Header/Header.tsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path={"/homework/react-components"} element={<HomeWorkN1/>}></Route>
            </Routes>
        </>
    );
}

export default App;
