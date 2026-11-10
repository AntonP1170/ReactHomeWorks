import FavoriteMovie from "@/Pages/ComponentPage/homework/FavoriteMovie.tsx";
import PersonalInfo from "@/Pages/ComponentPage/homework/PersonalInfo.tsx";
import CurrentTime from "@/Pages/ComponentPage/homework/CurrentTime.tsx";
import MyPet from "@/Pages/ComponentPage/homework/MyPet.tsx";

const ComponentPageHomework = () => {
    const skills = [
        "Frontend(React ts та екосистема)",
        "Backend Node js(NestJs)",
        "C++",
        "C#",
        ".NET",
        "Python",
        "JavaScript",
        "TypeScript",
        "MySQL",
        "PostgreSQL",
        "MsSQL",
        "MariaDB",
        "Linux",
        "Git",
        "Docker",
    ]
    const bestHabits = [
        "гризти гамак в якому він спить та дерев'яні дощечки",
        "постійно говорити",
        "купатися у вулканічному піску",
        "втикати в одне місце:)",
    ]
    return (
        <>
            <h2>Task 1</h2>
            <FavoriteMovie
                title={"Зелена книга"}
                director={"Пітер Фарреллі"}
                poster={"https://ag.gidonline.fun/imgs/6/5053.jpg"}
                studio={"Universal Pictures"} year={2018}/>
            <h2>Task 2</h2>
            <PersonalInfo
                city={"Біла Церква"}
                about={"поганий програміст"}
                email={"parsukanton80@gmail.com"}
                experience={"на жаль відсутній"}
                phone={"0932209676"}
                skills={skills}
                fullName={"Паршук Антон Павлович"}
                photo={"в myStat"}/>
            <h2>Task 3</h2>
            <CurrentTime/>
            <h2>Task 4</h2>
            <MyPet habits={bestHabits}/>
        </>
    );
};
export default ComponentPageHomework;
