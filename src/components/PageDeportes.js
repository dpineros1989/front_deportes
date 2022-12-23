import React, { Component } from "react";
import axios from 'axios';

const url = "http://localhost:9000/api/deportes";

class PageDeportes extends Component {

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
        //<h1>Pagina Deportes</h1>
        <div className="PageDeportes">
        <br />
        <br /><h1>Pagina Deportes</h1>
        <br />
        <button className="btn btn-success" onClick={() => {this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Usuario</button>
        <br />
        <br />
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Deporte</th>
             
            </tr>
          </thead>
          <tbody>
          {this.state.data.map(deportes => {
            return(
              <tr>
                <td>{deportes._id}</td>
                <td>{deportes.usu_deporte}</td>
              
              </tr>
            )
          })}  
          </tbody></table>
          </div>
    )
}

}

export default PageDeportes;