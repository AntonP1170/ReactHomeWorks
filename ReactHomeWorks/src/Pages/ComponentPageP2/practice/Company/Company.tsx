import style from "./Company.module.css";

interface Employee {
    name: string;
    position: string;
    experience: number;
}

interface CompanyProps {
    name: string;
    founded: number;
    headquarters: string;
    description: string;
    employees: Employee[];
}

const Company = ({name, founded, headquarters, description, employees}: CompanyProps) => {
    return (
        <section className={style.company}>
            <div className={style.info}>
                <h3>{name}</h3>
                <p>{description}</p>
                <ul>
                    <li>Рік заснування: {founded}</li>
                    <li>Штаб-квартира: {headquarters}</li>
                    <li>Кількість працівників у списку: {employees.length}</li>
                </ul>
            </div>

            <div>
                <h4>Працівники</h4>
                <ul className={style.employeeList}>
                    {employees.map((employee) => (
                        <li className={style.employee} key={employee.name}>
                            <strong>{employee.name}</strong>
                            <span>{employee.position}</span>
                            <span>Досвід: {employee.experience} р.</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Company;
