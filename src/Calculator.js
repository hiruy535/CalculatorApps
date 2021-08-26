import React, {useState} from 'react';
import Button from './Button';
import Keypad from './Keypad';
import './Calculator.css';
import Display from './Display';
import {NavLink} from 'react-router-dom';
import axios from 'axios'
import moment from 'moment'

function Calculator({currentUser,setCurrentUser}) {
    console.log(currentUser)
 const [data,setData] =useState('')
 const [history,setHistory] =useState([])
  const   calculate = () => {
        try {
            const result = eval(data);
            //this.setState({data: result});
            setData(result)
            const historyData = {expression:data,result:result,time:moment().format("YYYY-MM-DD")} 
            setHistory(prev=> [historyData,...prev])
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = 'X-CSRFToken'
            axios.post('http://127.0.0.1:8000/CalAPI/api/history/', historyData)
                .then(response => console.log("history added"))
                .catch(err=>alert(err));
        } catch (e) {
            //this.setState({data: 'error'})
            setData('error')
            setHistory(prev=> [{exp:data,result:'error'},...prev])
        }
    }

 const  handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                setData('')
                break;
            case 'equal':
                calculate();
                break;
            default:
                //this.setState({ data: this.state.data + value});
                setData(data + value)
        }
    }

        return(
            <div className="Calculator">

                
                <Display data={data}/>
                <Keypad>
                    <Button onClick={handleClick} label="C" value="clear" />
                    <Button onClick={handleClick} label="7" value="7" />
                    <Button onClick={handleClick} label="4" value="4" />
                    <Button onClick={handleClick} label="1" value="1" />
                    <Button onClick={handleClick} label="0" value="0" />

                    <Button onClick={handleClick} label="/" value="/" />
                    <Button onClick={handleClick} label="8" value="8" />
                    <Button onClick={handleClick} label="5" value="5" />
                    <Button onClick={handleClick} label="2" value="2" />
                    <Button onClick={handleClick} label="." value="." />

                    <Button onClick={handleClick} label="x" value="*" />
                    <Button onClick={handleClick} label="9" value="9" />
                    <Button onClick={handleClick} label="6" value="6" />
                    <Button onClick={handleClick} label="3" value="3" />
                    <Button onClick={handleClick} label="" value="null" />

                    <Button onClick={handleClick} label="-"  value="-" />
                    <Button onClick={handleClick} label="+"  value="+" />


                    <Button onClick={handleClick} label="(" value="(" />
                    <Button onClick={handleClick} label=")" value=")" />
                    <Button onClick={handleClick} label="="  value="equal" />

                   

                </Keypad>
                
            </div>
        );
    }


export default Calculator;