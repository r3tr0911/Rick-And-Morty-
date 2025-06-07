import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";
import Loader from "../Loader/loader"; // 👈 Asegúrate de que la ruta sea correcta

export default function Detail() {
  const { id } = useParams();
  const [pjDetail, setPjDetail] = useState(null);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_DETAIL}${id}`)
      .then((response) => {
        if (response.data.name) {
          setPjDetail(response.data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => window.alert(err));
  }, [id]);

  if (!pjDetail) {
    return <Loader />;
  }

  return (
    <div className={style.container}>
      <h3>{pjDetail.name}</h3>
      <h5>{pjDetail.status || ":( no hay status"}</h5>
      <img src={pjDetail.image} alt={pjDetail.name} />
      <section>
        <span>🐞{pjDetail.species}</span>
        <span>♀ {pjDetail.gender}</span>
        <span>🌍 {pjDetail.origin?.name}</span>
      </section>
    </div>
  );
}
