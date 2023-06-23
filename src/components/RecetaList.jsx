/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 19/06/2023 - 22:51:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/06/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { useState, useEffect } from "react";
import RecetaForm from "./RecetaForm";
import RecetaItem from "./RecetaItem";


const RecetaList = () => {
  const [recetaCount, setRecetaCount] = useState(0);
  const [recetas, setRecetas] = useState([]);

  const addReceta = (receta) => {
    setRecetas([...recetas, receta]);
  }

  useEffect(() => {
    setRecetaCount(recetas.length);
  }, [recetas])
  
  return (
    <div className="justify-self-center">
      <RecetaForm addReceta={addReceta} />
      <br />
      <h1>Mi lista de ({recetaCount}) recetas registradas </h1>
      <br />
      <ul>
        {recetas.map((receta) => (
          <li>
            <RecetaItem receta={receta} />
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
};

export default RecetaList;