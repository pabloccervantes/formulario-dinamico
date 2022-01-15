import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert2';
import fields from '../assets/json/fields.json';

class Formulario extends React.Component{
	//constructor del componente
	constructor(props){
		super(props)
		//Estado inicial del componente
		this.state = {
			campos: []
		}
	}
	//Se ejecuta al cargar componente
	componentDidMount() {
		//-----------------------------------------------------------------------------------------------
		//Se cambia título de la página
		document.title ="Reto Técnico - Formulario Dinámico";
		//Se lee JSON con campos a pintar y se guarda en el estado del componente
		this.setState({campos: fields});
		//-----------------------------------------------------------------------------------------------
	}
	//Nuevo input de texto-------------------------------------------------------------------------------
	nuevoCampoTexto = () => {
		swal.fire({
		  title:"<p style='font-size: 15pt;font-weight:600;color: #282828;'>Nuevo campo de texto</p>",
		  html: "<div class='form-group'>"+
					"<label for='tituloT'>Título del campo</label>"+
					"<input class='form-control' type='text' id='tituloT' name='tituloT' style='margin:2%;width:96%;'/>"+
				"</div>",
		  showCancelButton: true,
		  confirmButtonColor: "#17a2b8",
		  confirmButtonText: "<div style='font-size: 10pt;font-weight: 500;'>Guardar</div>",
		  cancelButtonText: "<div style='font-size: 10pt;font-weight: 600;'>Cancelar</div>",
		  customClass: {
		    cancelButton: 'cancelButton',
		    confirmButton: 'confirmButton'
		  },
		  didOpen: () => {
		  	swal.getConfirmButton().disabled = true;//Se deshabilita el botón "Guardar"
		  	//Se selecciona el primer campo, al abrir el alert
		    document.getElementById("tituloT").focus();
		    //Validación campo lleno
		    document.getElementById("tituloT").addEventListener('keyup', (e) => {
		    	if(document.getElementById("tituloT").value !== ""){
		    		swal.getConfirmButton().disabled = false;//Se habilita el botón "Guardar"
		    	} else {
		    		swal.getConfirmButton().disabled = true;//Se deshabilita el botón "Guardar"
		    	}
			});
		  }
		}).then((result) => {
			if (result.isConfirmed) {
				var aux = {
					label:document.getElementById("tituloT").value,
					type:"text",
					uid:this.generateUID()
				};
				fields.push(aux);
				this.setState({campos: fields});
			}
		});
	}
	//---------------------------------------------------------------------------------------------------
	//Nuevo input select---------------------------------------------------------------------------------
	nuevoCampoLista = () => {
		swal.fire({
		  title:"<p style='font-size: 15pt;font-weight:600;color: #282828;'>Nuevo campo de lista</p>",
		  html: "<div class='form-group'>"+
					"<label for='tituloT'>Título del campo</label>"+
					"<input class='form-control' type='text' id='tituloT' name='tituloT' style='margin:2%;width:96%;'/>"+
				"</div>"+
				"<div class='form-group'>"+
					"<label for='opc1'>Opción 1</label>"+
					"<input class='form-control' type='text' id='opc1' name='opc1' style='margin:2%;width:96%;'/>"+
				"</div>"+
				"<div class='form-group'>"+
					"<label for='opc2'>Opción 2</label>"+
					"<input class='form-control' type='text' id='opc2' name='opc2' style='margin:2%;width:96%;'/>"+
				"</div>"+
				"<div class='form-group'>"+
					"<label for='opc3'>Opción 3</label>"+
					"<input class='form-control' type='text' id='opc3' name='opc3' style='margin:2%;width:96%;'/>"+
				"</div>",
		  showCancelButton: true,
		  confirmButtonColor: "#17a2b8",
		  confirmButtonText: "<div style='font-size: 10pt;font-weight: 500;'>Guardar</div>",
		  cancelButtonText: "<div style='font-size: 10pt;font-weight: 600;'>Cancelar</div>",
		  customClass: {
		    cancelButton: 'cancelButton',
		    confirmButton: 'confirmButton'
		  },
		  didOpen: () => {
		  	swal.getConfirmButton().disabled = true;//Se deshabilita el botón "Guardar"
		  	//Se selecciona el primer campo, al abrir el alert
		    document.getElementById("tituloT").focus();
		    //Validación campo lleno
		    const validacion = () => {
		    	if(document.getElementById("tituloT").value !== "" &&
		    	   document.getElementById("opc1").value !== "" &&
		    	   document.getElementById("opc2").value !== "" &&
		    	   document.getElementById("opc3").value !== ""){
		    		swal.getConfirmButton().disabled = false;//Se habilita el botón "Guardar"
		    	} else {
		    		swal.getConfirmButton().disabled = true;//Se deshabilita el botón "Guardar"
		    	}
		    }
		    document.getElementById("tituloT").addEventListener('keyup', e => validacion());
			document.getElementById("opc1").addEventListener('keyup', e => validacion());
			document.getElementById("opc2").addEventListener('keyup', e => validacion());
			document.getElementById("opc3").addEventListener('keyup', e => validacion());
		  }
		}).then((result) => {
			if (result.isConfirmed) {
				var aux = {
					label:document.getElementById("tituloT").value,
					type:"select",
					opc1:document.getElementById("opc1").value,
					opc2:document.getElementById("opc2").value,
					opc3:document.getElementById("opc3").value,
					uid:this.generateUID()
				};
				fields.push(aux);
				this.setState({campos: fields});
			}
		});
	}
	//---------------------------------------------------------------------------------------------------
	//Nuevo input radio----------------------------------------------------------------------------------
	nuevoCampoRadio = () => {
		swal.fire({
		  title:"<p style='font-size: 15pt;font-weight:600;color: #282828;'>Nuevo campo de opción</p>",
		  html: "<div class='form-group'>"+
					"<label for='tituloT'>Nombre del campo</label>"+
					"<input class='form-control' type='text' id='tituloT' name='tituloT' style='margin:2%;width:96%;'/>"+
				"</div>",
		  showCancelButton: true,
		  confirmButtonColor: "#17a2b8",
		  confirmButtonText: "<div style='font-size: 10pt;font-weight: 500;'>Guardar</div>",
		  cancelButtonText: "<div style='font-size: 10pt;font-weight: 600;'>Cancelar</div>",
		  customClass: {
		    cancelButton: 'cancelButton',
		    confirmButton: 'confirmButton'
		  },
		  didOpen: () => {
		  	swal.getConfirmButton().disabled = true;//Se deshabilita el botón "Guardar"
		  	//Se selecciona el primer campo, al abrir el alert
		    document.getElementById("tituloT").focus();
		    //Validación campo lleno
		    document.getElementById("tituloT").addEventListener('keyup', (e) => {
		    	if(document.getElementById("tituloT").value !== ""){
		    		swal.getConfirmButton().disabled = false;//Se habilita el botón "Guardar"
		    	} else {
		    		swal.getConfirmButton().disabled = true;//Se deshabilita el botón "Guardar"
		    	}
			});
		  }
		}).then((result) => {
			if (result.isConfirmed) {
				var aux = {
					label:document.getElementById("tituloT").value,
					type:"radio",
					uid:this.generateUID()
				};
				fields.push(aux);
				this.setState({campos: fields});
			}
		});
	}
	//---------------------------------------------------------------------------------------------------
	//Crea uid aleatorio---------------------------------------------------------------------------------
	generateUID = () => {
	    var dt = new Date().getTime();
	    var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (dt + Math.random()*16)%16 | 0;
	        dt = Math.floor(dt/16);
	        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
	    });
	    return uid;
	}
	//---------------------------------------------------------------------------------------------------
	//Eliminar campo-------------------------------------------------------------------------------------
	eliminarCampo = (uid) => {
		fields.splice(fields.indexOf(fields.find(element => element.uid == uid)), 1);
		this.setState({campos: fields});
	}
	//---------------------------------------------------------------------------------------------------
	render(){
		//-------------------------------------------------------------
		
		//-------------------------------------------------------------
		return(
			<React.Fragment>

				<div className="container" style={{marginTop:"30px"}}>
					<div className="row">
						<div className="col-sm-3">
							<p><b>Agregar campo</b></p>
							<div className="row">
								<div className="col-sm-12">
									<button type="button" className="btn btn-primary opcInput" onClick={() => this.nuevoCampoTexto()}>Texto</button>
								</div>
								<div className="col-sm-12">
									<button type="button" className="btn btn-primary opcInput" onClick={() => this.nuevoCampoLista()}>Lista</button>
								</div>
								<div className="col-sm-12">
									<button type="button" className="btn btn-primary opcInput" onClick={() => this.nuevoCampoRadio()}>Opción</button>
								</div>
							</div>
						</div>
						<div className="col-sm-9">
							<form>
							{
								this.state.campos.map(campo => {
								switch(campo.type){
									case "text": return(
										<div className="form-group prefInput">
											<label for={campo.uid}>{campo.label}</label>
											<input type="text" className="form-control" id={campo.uid}/>
											<button type="button" className="btn btn-danger" style={{float:"right",marginTop:"5px",fontSize:"9pt"}} onClick={() => this.eliminarCampo(campo.uid)}>Eliminar</button>
										</div>
									);
									case "select": return(
										<div className="form-group prefInput">
										  <label for={campo.uid}>{campo.label}</label>
										  <select className="form-control" id={campo.uid}>
										    <option>{campo.opc1}</option>
										    <option>{campo.opc2}</option>
										    <option>{campo.opc3}</option>
										  </select>
										  <button type="button" className="btn btn-danger" style={{float:"right",marginTop:"5px",fontSize:"9pt"}} onClick={() => this.eliminarCampo(campo.uid)}>Eliminar</button>
										</div>
									);
									case "radio": return(
										<div className="form-check prefInput">
										  <input className="form-check-input" type="radio" id={campo.uid}/>
										  <label className="form-check-label" for={campo.uid}>{campo.label}</label>
										  <button type="button" className="btn btn-danger" style={{float:"right",marginTop:"5px",fontSize:"9pt"}} onClick={() => this.eliminarCampo(campo.uid)}>Eliminar</button>
										</div>
									);
								}
								})
							}
							</form>
						</div>
					</div>
				</div>

			</React.Fragment>
		);
	}
}

export default Formulario;