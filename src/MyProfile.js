import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const MyProfile = () => {

    const [tasks, setTasks] = useState([]); // all tasks
    const [filter, setFilter] = useState("all"); // default: show all tasks
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/tasks") // your backend URL
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    const filteredTasks = tasks.filter(task => {
        if (filter === "all") return true; // show all tasks
        if (filter === "completed") return task.complete === true; // show only completed
        if (filter === "pending") return task.complete === false; // show pending
        return true;
    });

    const handleDelete = (id) => {
        fetch("http://localhost:8000/tasks/"+id, {
            method: "DELETE"
        })
        .then(()=>{
            navigate('/');
        })
    }

    return ( 
        <div className="profile">
            <h2>My Tasks</h2>
            <div className="profile-tabs">
                <button onClick={() => setFilter("all")}>All Tasks</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
                <button onClick={() => setFilter("pending")}>Pending</button>  
            </div>
            <div className="filtered-list">
                {filteredTasks.map(task => (
                    <motion.div whileHover={{scale:1.02}} className="task-previewf" key={task.id}>
                        <div key={task.id} className="task-tab" >
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                            <p>Deadline: {task.deadline}</p>
                        </div>
                        <button onClick={()=> handleDelete(task.id)}>Delete</button>
                    </motion.div>
                ))}
            </div>
        </div>
     );
}
 
export default MyProfile;