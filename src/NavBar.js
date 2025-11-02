import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";
import ChecklistIcon from "./ChecklistIcon";

const NavBar = () => {
    return ( 
        <nav>
            <div className="navbar">
                <motion.div className="nav-head"><ChecklistIcon /><h1>ToDoApp</h1></motion.div>
                <motion.div className="nav-lists">
                    <motion.div whileHover={{fontWeight:900, scale:1.04, originX:0}}><Link to="/">Home</Link></motion.div>
                    <motion.div whileHover={{fontWeight:900, scale:1.04, originX:0}}><Link to="/add">New Task</Link></motion.div>
                    <motion.div whileHover={{fontWeight:900, scale:1.04, originX:0}}><Link to="/myprofile">My Tasks</Link></motion.div>
                </motion.div>
            </div>
        </nav>
     );
}
 
export default NavBar;