import React, {useState,useEffect} from 'react';
import axios from 'axios'
import './table.css'
function History(props) {
    const [historyData,sethistoryData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/CalAPI/api/history/')
        .then(response=>    sethistoryData(response.data))
    },[])
    



        return(

<table style={{marginTop:'15px'}} id="customers">
    <tr>
      <th scope="col">Expression</th>
      <th scope="col">Result</th>
      <th scope="col">Time</th>
    </tr>
{historyData.map((his,index)=>
{
    return(
        
    <tr>
      <td>{his.expression}</td>
      <td>{his.result}</td>
      <td>{his.time}</td>
    </tr>
    )  
}
   
)}

</table>
            
        );
    
}

export default History;










