import style from "./Faculty.module.css";

interface Student {
    fullName: string;
    course: number;
}

interface Group {
    name: string;
    specialty: string;
    students: Student[];
}

interface FacultyProps {
    name: string;
    university: string;
    dean: string;
    groups: Group[];
}

const Faculty = ({name, university, dean, groups}: FacultyProps) => {
    const studentsCount = groups.reduce((total, group) => total + group.students.length, 0);

    return (
        <section className={style.faculty}>
            <div className={style.info}>
                <h3>{name}</h3>
                <ul>
                    <li>Університет: {university}</li>
                    <li>Декан: {dean}</li>
                    <li>Кількість груп: {groups.length}</li>
                    <li>Кількість студентів: {studentsCount}</li>
                </ul>
            </div>

            {groups.map((group) => (
                <div className={style.group} key={group.name}>
                    <h4>{group.name}</h4>
                    <p>Спеціальність: {group.specialty}</p>
                    <ul className={style.studentList}>
                        {group.students.map((student) => (
                            <li key={student.fullName}>
                                {student.fullName} — курс {student.course}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default Faculty;
