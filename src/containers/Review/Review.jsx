
import React, { useContext, useState } from 'react';
// import {todoContext} from '../../contexts/TodoContext'
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../../assets/css/style.css'
import { authContext } from '../../contexts/AuthContext';

const Review = () => {
    let {addTask} = useContext (authContext)
    let [value, setValue] = useState('')
    let [value1, setValue1] = useState('')
    let [isError,setError] = useState(false)


    function handleClick() {
        if (!value ) {
            setError(true)
            return
        }else{
            setError(false)
        }

        let newObj = {
            nickName: value1,
            review: value,
            id: Date.now()
        }

        addTask(newObj)
        console.log(newObj)
        setValue('')
        setValue1('')

    }          
    return (
        <div className='review_component'>
            <h1 >Leave your comment</h1>
            <input 
            type="text"
            value={value1}
            placeholder="Nick Name"
            className='rev_inpName_component'
            onChange={(e) => setValue1(e.target.value)}
            style={isError ? {borderColor: 'red'}:{borderColor: 'white'}}
             /><br/>
            <input  style={isError ? {borderColor: 'red'}:{borderColor: 'white'}} 
                value={value} onChange={(e) => setValue(e.target.value)}
                type="text" 
                placeholder="Comment"
                className='rev_inp_component'
            /><br/>
            <Button variant="contained" size="large" color="dark" onClick={handleClick}>Submit</Button>
        </div>
    );
};

export default Review;

