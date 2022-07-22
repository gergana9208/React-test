import {useParams, Route} from 'react-router-dom'
import "./DemoItem.css";
import DemoDate from "./DemoDate";
import Card from "../UI/Card";
const DemoItem = (props) => {
  const params = useParams();
 return (
  
   <li>
    <Card className="demo-item">
      
      <div className="demo-item__description">pppppp{params.demoId}
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
