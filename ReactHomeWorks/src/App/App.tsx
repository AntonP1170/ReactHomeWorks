import {Route, Routes} from "react-router";
import MainPage from "@/Pages/MainPage/MainPage.tsx";
import Header from "@/Components/Header/Header.tsx";
import EnterToReact from "@/Pages/EnterToReact/EnterToReact.tsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path={"/homework/enter-to-react"} element={<EnterToReact/>}/>
            </Routes>
        </>
    );
}

export default App;
