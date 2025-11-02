import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Modal = ({ showModal, setShowModal }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0px",
      opacity: 1,
      transition: { delay: 0.3 },
    },
  };

  const navigate = useNavigate();

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <h2>Your task is added 🎉</h2>
            <motion.button whileHover={{backgroundColor:'#D4BEE4', color:'#3B1E54'}}  onClick={() => {setShowModal(false); navigate('/');}}>Back to Home</motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
