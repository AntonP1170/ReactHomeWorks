import BookInfo from "./BookInfo";

const WorkList = () => {
    return (
         <div>
      <h2>Відомі твори</h2>
      <BookInfo
        title="Гамлет"
        year="1601"
        genre="Трагедія"
      />
      <BookInfo
        title="Ромео і Джульєтта"
        year="1595"
        genre="Трагедія"
      />
      <BookInfo
        title="Макбет"
        year="1606"
        genre="Трагедія"
      />
    </div>
    )
}
export default WorkList;