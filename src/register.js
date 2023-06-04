import logo from './logo.svg';
import './App.css';

import ListadoPeliculas from './listadoPeliculas';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import PageWrapper from './pagewrapper';
import { Fragment } from 'react';
import { FbRegistrar, FirebaseLogin, firebaseLogin } from './firebaseC';



function Register() {
	const [datos, setDatos] = useState({
		username: " ",
		email: "",
		password: ""
		
	})

	
	const navigate = useNavigate();
	const newFuntion = (event) => {
		console.log(event.target.value)
		setDatos({
			...datos,
			[event.target.name] : event.target.value
		})
	}

	const registrarUsuario = (event)=> {
		event.preventDefault();
		FbRegistrar(datos.email, datos.password);
		
	  }

	  const iniciarSesion = async (event) => {
		let sesionIniciada = await FirebaseLogin(datos.email, datos.password)

		if (sesionIniciada) {
			navigate('/blog', {replace: true});
		}else{
			alert('Las credenciales no son correctas')
		}
	  }

	
  return (
<PageWrapper>
	
</PageWrapper>

  );
 
}

export default Register;