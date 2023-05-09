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

const addToDo = async (text, setText, setTasks) => {
    await axios.post(`${baseUrl}/save`, {text})
    const {data: respTasks} = await axios.get(baseUrl)
    setText("")
    setTasks(respTasks)



    // axios.post(`${baseUrl}/save`, {text}).then((data) => {
    //     console.log(data);
    //     setText("")
    //     getAllToDo(setTasks)
    // })
}

export {getAllToDo, addToDo}