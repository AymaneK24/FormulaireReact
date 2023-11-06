import { useState, ChangeEvent } from "react";


function PROFILE () {

// for nom prénome 
 const [nom, setNom] = useState<string>("Votre Nom");

  const handleNomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNom(e.target.value);
  };

  const [adress, setAdress] = useState<string>("");

  const handleAdressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  }; 



  const isNameValid = (name: string) => {
    // Vérifie si le nom ne contient que des lettres majuscules et pas de chiffres
    const isUppercase = /^[A-Z]+$/.test(name);
    const hasNoDigits = !/\d/.test(name);
    return isUppercase && hasNoDigits;
    
  };



  const [prénom, setPrénom] = useState<string>("Votre Prénom");

  const handlePrénomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrénom(e.target.value);
  };
  const [titre, setTitre] = useState<string>("");
  const handleTitreChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitre(e.target.value);
  };




// for tel
  const [tel, setTel] = useState<string >("");
  const handleTelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };
  const isTelValid = (tel: string) => {
    // Utilisez une expression régulière pour valider le format du numéro de téléphone français
    return /^0[1-9]\d{8}$/.test(tel);
  };





// for mail

  const [email, setEmail] = useState<string>("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const isEmailValid = (email: string) => {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  };

 
    
 
  
  



// this is for age : 

const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [age, setAge] = useState<number | undefined>();

  const handleDateOfBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(e.target.value);
    // Calculate the age and update the state when the date of birth changes
    calculateAge(e.target.value);
  };

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageDiff = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year or not
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      setAge(ageDiff - 1);
    } else {
      setAge(ageDiff);
    }
    
  };


 
  
  


 











    return (

        <> 
        
        <h2>Informations personnelles :</h2>

        <label >
            Entrer Votre Nom* : <input type="text" name="nom" placeholder="Nom"  value={nom}
          onChange={handleNomChange}  required/>
        </label>
        {nom && !isNameValid(nom) && (
          <p style={{
            color: "red",
            marginTop: "5px",
            backgroundColor: "#fdfdff",
            padding: "10px",
            fontSize: "14px", // Add font size
            border: "1px solid red", // Add border
            borderRadius: "10px",
            width:"600px" 
          }}>Le nom ne doit pas contenir de chiffres et doit etre en majuscule.</p>
        )}


        <label>
            Entrer Votre Prénom* : <input type="text" name="Prénom" placeholder="Prénom" required  value={prénom}
          onChange={handlePrénomChange} /> 
        </label>
        {prénom && !isNameValid(prénom) && (
          <p style={{
            color: "red",
            marginTop: "5px",
            backgroundColor: "#fdfdff",
            padding: "10px",
            fontSize: "14px", // Add font size
            border: "1px solid red", // Add border
            borderRadius: "10px",
            width:"600px" 
          }}>Le prénom ne doit pas contenir de chiffres et doit etre en majuscule.</p>
        )}



        <label>
            Votre Tel* : <input type="number" name="tel" placeholder="06********" required    value={tel}
          onChange={handleTelChange} />
        </label>
        {tel && !isTelValid(tel) && (
          <p style={{
            color: "red",
            marginTop: "5px",
            backgroundColor: "#fdfdff",
            padding: "10px",
            fontSize: "14px", // Add font size
            border: "1px solid red", // Add border
            borderRadius: "10px",
            width:"600px" 
          }}>Le numéro de téléphone doit être au format 06********.</p>
        )}


        <label >
            Votre Adress Mail* :  <input type="text" name="email" required placeholder="email@gmail.com" value={email}
    onChange={(e) => handleEmailChange(e) }  />
        </label>
        {email && !isEmailValid(email) && (
          <p style={{
            color: "red",
            marginTop: "5px",
            backgroundColor: "#fdfdff",
            padding: "10px",
            fontSize: "14px", // Add font size
            border: "1px solid red", // Add border
            borderRadius: "10px",
            width:"600px" 
          }}>L'adresse e-mail doit être au format email@gmail.com.</p>
        )}
        




        <label >
            Votre Date de Naissance* : <input type="date" name="naissance" required  value={dateOfBirth}
          onChange={handleDateOfBirthChange}  />
        </label>
        {age !== undefined && age < 18 && (
  <p
    style={{
      color: "red",
      marginTop: "5px",
      backgroundColor: "#fdfdff",
      padding: "10px",
      fontSize: "14px", // Add font size
      border: "1px solid red", // Add border
      borderRadius: "10px",
      width:"600px" 
    }}
  >
    L'âge doit être supérieur à 18 ans.
  </p>
)}




        <label >
            Adress* : <input type="text" name="adress" required   value={adress}
          onChange={handleAdressChange}  />
        </label>


        <label >
            Titre du CV* : <input type="text" name="titre" required value={titre}
          onChange={handleTitreChange} />
        </label>


        <label> 
          Votre Photo :  <input type="file" />
        </label>
        
        

    
    
        </>
    );
}
export default PROFILE