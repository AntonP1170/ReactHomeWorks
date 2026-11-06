import style from "./Tabs.module.css";

interface IProps {
  title1: string;
  title2: string;
  change: (val: string) => void;
}
const Tabs = ({ title1, title2, change }: IProps) => {
  return (
    <div className={style.TabsContainer}>
      <div>
        <button onClick={(e) => change(e.currentTarget.value)}>{title1}</button>
        <button onClick={(e) => change(e.currentTarget.value)}>{title2}</button>
      </div>
    </div>
  );
};

export default Tabs;
