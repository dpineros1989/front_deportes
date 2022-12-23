import React, { Component } from "react";
import axios from 'axios';

const url = "http://localhost:9000/api/deportes";

class PageEquipos extends Component {
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
       // <h1>Pagina Equipos</h1>

       <div className="PageEquipos">
       <br />
       <br /><h1>Pagina Equipos</h1>
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
         {this.state.data.map(equipos => {
           return(
             <tr>
               <td>{equipos._id}</td>
               <td>{equipos.usu_deporte}</td>
             
             </tr>
           )
         })}  
         </tbody></table>
         </div>
   )
    
}

}

export default PageEquipos;