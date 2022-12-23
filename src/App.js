
//import './App.css';
import { Component } from 'react';
//import {Saludar} from './components/Saludar'
import Menu from "./components/Menu"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PageDeportes from './components/PageDeportes';
import PageEquipos from './components/PageEquipos';
import PageEventos from './components/PageEventos';
import PageInicio from './components/PageInicio';
import PageSesion from './components/PageSesion';
import PageUsuarios from './components/PageUsuarios';
import axios from 'axios';

const url = "http://localhost:9000/api/usuarios";

class App extends Component {

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

  /*render(){
    return(
    <div className="App">
        <br />
        <br />
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
                <td>{usuarios.usu_apellidos}</td>
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
  }*/

  render() {
    return (
      <>
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<PageInicio />}/>
            <Route path="/PageInicio" element={<PageInicio />}/>
            <Route path="/PageDeportes" element={<PageDeportes />}/>
            <Route path="/PageEquipos" element={<PageEquipos />}/>
            <Route path="/PageEventos" element={<PageEventos />}/>
            <Route path="/PageSesion" element={<PageSesion />}/>
            <Route path="/PageUsuarios" element={<PageUsuarios />}/>
          </Routes>
        </Router>

      </>

      //

      
    );
  }
  
}
// {Saludar()}
export default App;
