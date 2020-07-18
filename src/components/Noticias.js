import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Noticias(props) {
 
  const show = props.noticias.items.map((noticia) => (
    <div className="card-body">
      <div className="card promoting-card">
        <div className="view overlay">
          <img className="card-img-left rounded-0" src={noticia.img} alt={noticia.title}/>
        </div>

        <h4 className="card-title font-weight-bold mb-2">{noticia.title}</h4>

        <p className="card-text">
          <i className="far fa-clock pr-2">14-5-2020</i>
        
        </p>
        <div className="collapse-content">
          <p className="card-text collapse" id="collapseContent">
            {noticia.description}
          </p>
     
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Noticias</h1>
      {show}
    </div>
  );
}

export default Noticias;
