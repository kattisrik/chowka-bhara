import { useNavigate } from "react-router-dom";
import { generateUUID } from '../../utils/helper';
const Home = () => {
    const navigate = useNavigate();
    return(
        <div className="App">
          <h3>Chowka Bhara</h3>
          <button onClick={() => {
            const newPath = generateUUID()
            navigate(`/game/${newPath}`);
           }}>Create New Game</button>
        </div>
    )
}
export default Home;
