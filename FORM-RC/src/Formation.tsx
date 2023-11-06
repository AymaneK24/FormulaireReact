function Formation () {



    return (

        <> 
        
        
         <h2>Formation et Diplome : </h2>
            
           

            <select id="diplome">
                Diplome :
                <option> Selectionner un Diplome </option>

                <option>Doctorat</option>
                <option>Master</option>
                <option>Lisence </option>
                <option>Baccalauréat</option>
                

            </select>
            <label >Ecole : <input  id="ecole" type="text" /></label>
            <label>L'année : <input  id="anne" type="text"  placeholder="20--/20--" /></label>

            

        
    
    
        </>
    );
}
export default Formation