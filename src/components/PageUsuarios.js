import React, { Component } from "react";
import axios from 'axios';

const url = "http://localhost:9000/api/usuarios";
class PageUsuarios extends Component {
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
        //<h1>Pagina Usuarios</h1>
        <div className="PageUsuarios">
        <br />
        <br /><h1>Pagina Usuarios</h1>
        <br />
        <button className="btn btn-success" onClick={() => {this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Usuario</button>
        <br />
        <br />
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Clave</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map(usuarios => {
            return(
              <tr>
                <td>{usuarios._id}</td>
                <td>{usuarios.usu_email}</td>
                <td>{usuarios.usu_clave}</td>
                <td>{usuarios.usu_nombres}</td>
                <td>{usuarios.usu_apellidos}</td>
                <td><button>Editar</button></td>
              </tr>
            )
          })}  
          </tbody></table>
          </div>
        
    );
}


}

export default PageUsuarios;