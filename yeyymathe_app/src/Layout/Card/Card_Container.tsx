import styles from "./card_container.module.css";
import ProgressBar from "../../components/ProgressBar" 
import Title from "../../components/Title";

const Card_Container = (props: any) => {
  return (
    <div className={styles.card}>
      <ProgressBar/>
      <Title title={props.title}/>
      
      <div className={styles.title}> {}</div>
        <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Card_Container;
