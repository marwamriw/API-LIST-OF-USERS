
import './App.css';
import UserList from './UserList';
import { TbStars } from "react-icons/tb";
import { motion } from "framer-motion"

//root component
function App() {
  return (
    <div className="App">
      <motion.h1 whileHover={{ scale: 1.7 }}><TbStars />  LIST OF USERS <TbStars /></motion.h1>
  <UserList/>
    </div>
  );
}

export default App;
