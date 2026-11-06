import { Route, Routes } from "react-router";
import MainPage from "@/Pages/MainPage/MainPage.tsx";
import Header from "@/Components/Header/Header.tsx";
import EnterToReactPage from "@/Pages/EnterToReact/EnterToReactPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path={"/enter-to-react"}
          element={<EnterToReactPage />}
        />
      </Routes>
    </>
  );
}

export default App;
