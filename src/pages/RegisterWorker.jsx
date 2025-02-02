import { useState } from "react";
import '../styles/global.css'

function RegisterWorker() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      skills: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Worker Registered: ", formData);
    };
  
    return (
      <div>
        <h2>Inscription Travailleur</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
          <input type="text" name="skills" placeholder="Compétences" onChange={handleChange} required />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    );
  }
  
  export default RegisterWorker;