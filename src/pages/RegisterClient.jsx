import { useState } from "react";
import '../styles/global.css'

function RegisterClient() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      projectType: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Client Registered: ", formData);
    };
  
    return (
      <div>
        <h2>Inscription Client</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
          <input type="text" name="projectType" placeholder="Type de projet" onChange={handleChange} required />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    );
  }
  
  export default RegisterClient;