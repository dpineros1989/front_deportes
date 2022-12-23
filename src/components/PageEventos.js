import React, { Component } from "react";
import axios from 'axios';

const url = "http://localhost:9000/api/eventos";

class PageEventos extends Component {
    state ={ data: []}

    peticionGet = () =>{
        axios.get(url).then(response=>{
          //console.log(response.data)
          this.setState({data:response.data})
    
    
        });
      };

      componentDidMount(){
        this.peticionGet();
      }

render(){
    return(
       // <h1>Pagina Eventos</h1>
       <div className="PageEventos">
        <br />
        <br /><h1>Pagina eventos</h1>
        <br />
        <button className="btn btn-success" onClick={() => {this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Usuario</button>
        <br />
        <br />
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha Evento</th>
              <th>Deporte</th>
              <th>Equipos 1</th>
              <th>Equipos 2</th>
              <th>Resultado equipo 1</th>
              <th>Resultado equipo 2</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map(eventos => {
            return(
              <tr>
                <td>{eventos._id}</td>
                <td>{eventos.usu_fecha}</td>
                <td>{eventos.usu_deporte}</td>
                <td>{eventos.usu_equipo1}</td>
                <td>{eventos.usu_equipo2}</td>
                <td>{eventos.usu_resultados_equipo1}</td>
                <td>{eventos.usu_resultados_equipo2}</td>
              </tr>
            )
          })}  
          </tbody></table>
          </div>
    );
}

}

export default PageEventos;