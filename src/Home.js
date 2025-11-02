import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import useFetch from "./useFetch";
import MyProfile from "./MyProfile";

const Home = () => {

    const {data, isPending, error} = useFetch("http://localhost:8000/tasks");

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    if (data) {
      setTasks(data);
    }
    }, [data]);

    return ( 
        <div>
            {error && <div className="error-msg">{error}</div>}
            {isPending && <div className="loading">Loading...</div>}
            {tasks && <TaskList tasks={tasks.filter((tasks=> (tasks.complete === false)))} setTasks={setTasks}/>}
        </div>
     );
}
 
export default Home;