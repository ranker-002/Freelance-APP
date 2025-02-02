import { Link } from "react-router-dom";
import '../styles/global.css'
function Home() {
  return (
    <div>
      <h1>Bienvenue sur Freelance-APP</h1>
      <p>Inscrivez-vous en tant que :</p>
      <div>
        <Link to="src/pages/RegisterWorker.jsx">
          <button>S'inscrire comme Travailleur</button>
        </Link>
        <Link to="src/pages/RegisterClient.jsx">
          <button>S'inscrire comme Client</button>
        </Link>
      </div>
    </div>
  );
}


export default Home;