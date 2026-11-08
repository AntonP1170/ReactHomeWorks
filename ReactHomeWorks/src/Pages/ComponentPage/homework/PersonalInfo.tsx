interface PersonalPageProps {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  experience: string;
  skills: string[];
  photo: string;
  about: string;
}

const PersonalInfo = ({
  fullName,
  phone,
  email,
  city,
  experience,
  skills,
  photo,
  about,
}: PersonalPageProps) => {
  return (
    <div className="profile">
      <h2>Персональна сторінка</h2>

      <img src={photo} alt="Моє фото" />

      <h3>{fullName}</h3>
      <p>
        <b>Телефон:</b> {phone}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Місто:</b> {city}
      </p>
      <p>
        <b>Досвід роботи:</b> {experience}
      </p>

      <h4>Навички:</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <p>
        <b>Про себе:</b> {about}
      </p>
    </div>
  );
};
