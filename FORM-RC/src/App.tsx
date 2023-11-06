


import './App.css'
import Formation from './Formation'
import Langage from './Langage'
import Loisir from './Loisir'
import PROFILE from './PROFILE'
import Projet from './Projet'
import Skills from './Skills'
import Soft from './Soft'





function App() { 
  

  


  return (
    <>
    
      <h1> Remplir le Formulaire Suivant pour avoir votre CV</h1>
      
    
    <body>
    <form >
      
      <PROFILE/>
      <Formation/>
      <Skills/>
      <Langage/>
      <Projet/>
      <Soft/>
      <Loisir/>


   
     
      <button type="submit" > Enregistrer </button>
      
     
    



    </form>

    </body>

    </>
  )
}


export default App
