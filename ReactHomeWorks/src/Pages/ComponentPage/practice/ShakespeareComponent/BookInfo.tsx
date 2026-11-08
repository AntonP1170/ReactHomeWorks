interface IProps {
  title: string;
  year: string;
  genre: string;
}

const BookInfo = ({ title, year, genre }: IProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Рік написання: {year}</p>
      <p>Жанр: {genre}</p>
    </div>
  );
};
export default BookInfo;
