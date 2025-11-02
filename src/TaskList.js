import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TaskList = ({tasks, setTasks}) => {

    const handleComplete = (id) =>{
        const task = tasks.find(t => t.id === id);

        fetch("http://localhost:8000/tasks/" + id, {
        method: "PATCH", // only update one field
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: true })
        })
        .then(() => {
            console.log("updated complete");
            setTasks(tasks.filter(task => task.id !== id));
        });
    }

    const handlePostpone = (id) =>{
        const task = tasks.find(t => t.id === id);

        fetch("http://localhost:8000/tasks/" + id, {
        method: "PATCH", // only update one field
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deadline: "Crossed" })
        })
        .then(() => {
            console.log("task postponed");
            setTasks(
            tasks.map(t => t.id === id ? { ...t, deadline: "Crossed" } : t)
        );
        });
    }

    return ( 
        <div className="container">
            <motion.h1 initial={{y:-20, scale:0.8}} animate={{y:10, originY:0, scale:1.2}} transition={{repeat: Infinity, repeatType:'reverse', delay:0.5, duration:'1', type:'spring'}}>Your Tasks</motion.h1>
            {tasks.map((task)=>(
                <motion.div whileHover={{scale:1.02}} className="task-preview" key={task.id}>
                    <div className="task-tab">
                        <h2>{task.name}</h2>
                        <p>"{task.description}"</p>
                        <p>Deadline: {task.deadline}</p>
                    </div>
                    <div className="button-tabs">
                        <button onClick={()=> handlePostpone(task.id)}>Postpone</button>
                        {!task.completed && (<button onClick={() => handleComplete(task.id)}>Complete</button>)}
                        {/* <button onClick={handleComplete}>Complete</button> */}
                    </div>
                </motion.div>
            ))}
        </div>
     );
}
 
export default TaskList;