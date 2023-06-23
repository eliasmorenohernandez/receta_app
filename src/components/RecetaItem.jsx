/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 19/06/2023 - 23:01:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/06/2023
    * - Author          : Admin
    * - Modification    : 
**/
const RecetaItem =({receta}) =>{
    const {nombre,imagenreceta,descripcionpreparacion,tiempopreparacion,ingredientes  } = receta;
      return (
        <div className="p1 rounded-xl w-[600px] bg-rose-200">
          <h2><strong className="text-blue-600">Nombre de la Receta: </strong><strong className=" text-green-800 underline decoration-pink-800"> {nombre}</strong></h2>
          <p><strong className="text-blue-600">Imagen de la Receta:</strong> <img width="300px" height="200px" src={imagenreceta} alt="No disponible"></img></p>
          <p><strong className="text-blue-600">Descripción de Preparación de la Receta:</strong><strong className=" text-green-800"> {descripcionpreparacion}</strong></p>
          <p><strong className="text-blue-600">Tiempo de Preparación de la Receta:</strong><strong className=" text-green-800"> {tiempopreparacion} minutos</strong></p>
          <p><strong className="text-blue-600">Ingredientes:</strong><br />
            <ul>
            {ingredientes.map((ingediente) => (
              <li >- { ingediente}</li>
            ))}
            </ul>
          </p>
        </div>
      )
  };

export default RecetaItem