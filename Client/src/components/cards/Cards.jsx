import Card from "../card/Card.jsx";
import style from './Cards.module.css';
import Swal from 'sweetalert2';

export default function Cards(props) {

 
  const handleCardClose = (id, name) => {
    Swal.fire({
      title: `¿Eliminar a ${name}?`,
      text: "Este personaje será removido de la vista.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        props.onClose(id);
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: `${name} fue eliminado.`,
          timer: 1000,
          showConfirmButton: false
        });
      }
    });
  };

  return (
    <div className={style.container}>
      {props.characters.map((pj) => (
        <Card
          key={pj.id}
          id={pj.id}
          name={pj.name}
          species={pj.species}
          status={pj.status}
          gender={pj.gender}
          origin={pj.origin.name}
          image={pj.image}
          onClose={() => handleCardClose(pj.id, pj.name)} 
        />
      ))}
    </div>
  );
}
