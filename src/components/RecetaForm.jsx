/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 17/06/2023 - 11:47:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/06/2023
    * - Author          : Admin
    * - Modification    : 
**/

const ProductForm = ({ addReceta}) => {
  let receta = null;
  let ingredientes = [];
  const habilitarValores = (valorReceta, disabledReceta, valorIngefiente, disabledIngrediente) => {
      if (valorReceta !== null)
      {
        document.getElementById("nombrereceta").value = valorReceta;
        document.getElementById("descripcionpreparacion").value = valorReceta;
        document.getElementById("imgreceta").value = valorReceta;
        document.getElementById("tiempopreparacion").value = valorReceta;
      }
      document.getElementById("nombreingrediente").disabled = disabledIngrediente;
      document.getElementById("nombrereceta").disabled = disabledReceta;
      document.getElementById("descripcionpreparacion").disabled = disabledReceta;
      document.getElementById("tiempopreparacion").disabled = disabledReceta;
      document.getElementById("imgreceta").disabled = disabledReceta;
      document.getElementById("btnagregarreceta").disabled = disabledReceta;
      document.getElementById("btnagregarIngrediente").disabled = disabledIngrediente;
      document.getElementById("btnnuevareceta").disabled = disabledIngrediente;
    }
    
  const reiniciarValores = () => {
    if (receta !== null)
    {
      if (receta.ingredientes.length>0)
      {
        addReceta(receta);
        document.getElementById("btnnuevareceta").textContent = "Receta en captura";
        alert("Receta terminada con éxito. \nYa puedes registrar una nueva receta.");
      }
      else
      {
        alert("Por favor agrega al menos un ingrediente a la receta registrada.");
        return;
      }
    }
    receta = null;
    ingredientes = [];
    habilitarValores("", false, "", true);
  }
    const submit = (event) => {
      event.preventDefault();
      const form = event.target;
      const nombre = form[0].value;
      const descripcionpreparacion = form[2].value;
      const tiempopreparacion = form[3].value;
      let imagenreceta = "";
      const fileImagen = form[1];
      const fr = new FileReader();
      fr.readAsDataURL(fileImagen.files[0]);
      setTimeout(() => {
        imagenreceta = fr.result;
        ingredientes = [];
        receta = null;
        receta = { nombre, imagenreceta, descripcionpreparacion, tiempopreparacion, ingredientes};
        
      }, 2000);
      habilitarValores(null, true, "", false);
      document.getElementById("btnnuevareceta").textContent = "Terminar Receta";
      alert("Receta registrada con éxito. \nFavor de capturar los ingrediente de la receta registrada.");
  }

  const agregarIngedienteReceta = (event) => {
    event.preventDefault();
    
    if (document.getElementById("nombreingrediente").value.trim() !== "")
    {
      receta.ingredientes.push(document.getElementById("nombreingrediente").value);
      document.getElementById("nombreingrediente").value = "";
    }
    else
    {
      alert("Favor de capturar el ingrediente de la receta registrada.");
    }
  }

  return (
    <>
      <br />
        <button onClick={reiniciarValores} id="btnnuevareceta">Nueva Receta</button>
        <form onSubmit={submit}>
        <br />
          <input type="text" id= "nombrereceta" placeholder="Nombre Receta" required disabled />
          <input type="file" id= "imgreceta" accept="image/png, image/jpeg"  placeholder="Imagen de Receta" required disabled />
          <input type="text" id= "descripcionpreparacion" placeholder="Descripción Preparación" required disabled />
          <input type="number" id= "tiempopreparacion" placeholder="Tiempo de Preparación (minutos)" required disabled />
          <button type="submit" id="btnagregarreceta" disabled>Agregar Receta</button>
      </form>
      <section>
        <form onSubmit={agregarIngedienteReceta}>
          <div>
          
          <input type="text" id="nombreingrediente" placeholder="Agregar ingredientes de la receta" required disabled />
          <button type="submit" id="btnagregarIngrediente" disabled >Agregar Ingrediente</button>
          </div>
        </form>
      </section>
      </>
    );
}
  
export default ProductForm;