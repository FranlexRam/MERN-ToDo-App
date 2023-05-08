import axios from 'axios';

const baseUrl = "http://localhost:5000"

const getAllToDo = (setTasks) => {
    axios
        .get(baseUrl)
        .then(({data})=> {
            console.log('data ---> ', data);
            setTasks(data)
    })
}

const addToDo = (text, setText, setTasks) => {
    axios.post(`${baseUrl}/save`, {text}).then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setTasks)
    })
}

export {getAllToDo, addToDo}