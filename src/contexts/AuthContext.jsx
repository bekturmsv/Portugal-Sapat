import React, {useReducer} from 'react';
import { AUTH_API } from '../helpers/constant';
import axios from 'axios'

export const authContext = React.createContext();
const INIT_STATE = {
    profile: [],
    profToEdit: null,
    comment: []
};

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_CONTACTS_DATA":
            return { ...state, comment: action.payload }
        case "GET_PROFILE_PAGE":
            return {...state, profile: action.payload }
        case "EDIT_PROFILE":
            return { ...state, profToEdit: action.payload }

    }
}
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getreviewData = async () => {
        let { data } = await axios(`http://localhost:8000/comment`)
        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data
        })  
    }

    const addTask = async (newTask) => {
        await axios.post('http://localhost:8000/comment', newTask)
        getreviewData()
    }

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:8000/comment/${id}`)
        getreviewData()
    }


    async function registerUser(e, history){
        e.preventDefault()
        const newUser = {
            email: e.target[2].value,
            password: e.target[4].value
        }
        try{
            const res = await axios.post(`${AUTH_API}/api/auth/register`, newUser)
            history.push('/signin')
        }catch{
            alert('Некорректная почта или пароль')
        }
    }
    async function loginUser (e, history){
        e.preventDefault()
        const newUser = {
            email: e.target[0].value,
            password: e.target[2].value
        }
        try{
            const res = await axios.post(`${AUTH_API}/api/auth/login`, newUser)
            history.push("/list")  
        }catch{
            alert('Некорректная почта или пароль')
        }
    }
    function hasAccount(history) {
        history.push("/signin");
      }
    function hasnotAccount(history) {
    history.push("/signup");
    }
    
    return (
        <authContext.Provider value ={{
            comment: state.comment,
            registerUser,
            hasAccount,
            hasnotAccount,
            loginUser,
            addTask,
            getreviewData,
            deleteTask
        }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;