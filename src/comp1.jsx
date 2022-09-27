import React from 'react';
import Dc from './displaycomp';
import './comp1.css'
let arr=[];
class Comp1 extends React.Component {
    constructor (){
        super();
        this.state = {
            ar:[]
        }
    }
    submitFun = () => {
        arr.push({name:document.getElementById('name').value,dept:document.getElementById('dept').value,rating:document.getElementById('num').value})
        this.setState({ar:arr})

    }
    render(){
        return(
            <div>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name"/><br/>
            <label htmlFor="dept">Department : </label>
            <input type="text" id="dept"/><br/>
            <label htmlFor="num">Rating : </label>
            <input type="number" id="num"></input><br/>
            <div id='submit' onClick={this.submitFun}> SUBMIT</div>
            <Dc prop1={this.state}/>

            </div>
        )
    }

}

export default Comp1 