import DemoItem from "./DemoItem";
import './DemosList.css'

const DemosList = props => {
 
    
    if (props.items.length === 0) {
        return <h2 className="demo-list__fallback">Nothing imported</h2>
    }
      

return <ul className="demo-list">
{props.items.map((demo) => (
   
    <DemoItem
      key={demo.id}
      title={demo.title}
      sport={demo.sport}
      description={demo.description}
      date={demo.date}
      
    />
   
  ))}
  
  </ul>


};

export default DemosList;