import style from "./Tabs.module.css";

interface IProps {
  title1: string;
  title2: string;
  state:string;
  change: (val: string) => void;
}
const Tabs = ({ title1, title2, change,state }: IProps) => {

  return (
    <div className={style.TabsContainer}>
      <div className={style.Tabs}>
        <button disabled={state === title1?true:false} onClick={() => change(title1)}>{title1}</button>
        <button disabled={state === title2?true:false}  onClick={() => change(title2)}>{title2}</button>
      </div>
    </div>
  );
};

export default Tabs;
