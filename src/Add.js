import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Add = ({showModal, setShowModal}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit  = (e) =>{
        e.preventDefault();
        const task = {name, description, deadline, complete:false};

        setIsPending(true);
        fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
        .then(()=>{
            setIsPending(false);
            setShowModal(true);
            // navigate('/');
        })
    }

    return ( 
        <div className="add-task">
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task Name:</label>
                <input type="text" required value={name} onChange={(e)=> setName(e.target.value)} />
                <label>Description</label>
                <textarea value={description} required onChange={(e)=> setDescription(e.target.value)}></textarea>
                <label>Deadline:</label>
                <input type="date" required value={deadline} onChange={(e)=> setDeadline(e.currentTarget.value)}/>
                {!isPending && <button>Add Task</button>}
                {isPending && <button>Adding Task</button>}
            </form>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
     );
}
 
export default Add;