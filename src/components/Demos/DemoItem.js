
import "./DemoItem.css";
import DemoDate from "./DemoDate";
import Card from "../UI/Card";
import NewDemo from "../NewDemo/NewDemo";
const DemoItem = (props) => {
  
 return (
   <li>
    <Card className="demo-item">
      
      <div className="demo-item__description">
        <h2>{props.title}</h2>
        <h2>{props.sport}</h2>
        <h2>{props.description}</h2>
        <DemoDate date={props.date} />
       
      </div>
     
    </Card>
  
    </li>
    
  );
}

export default DemoItem;
