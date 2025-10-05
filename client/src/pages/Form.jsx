import React, { useState } from "react";
import "../styles/Form.css";

function Contacto() {
    //Estado del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    //Ejecuta cada vez que el usuario completa el campo
    const actualizarCampos = (e) => {
        const { name, value } = e.target; //toma el valor como clave para saber cual se modifico
        setFormData((prev) => ({ ...prev, [name]: value })); //con el valor clave, copia los demas valores en el estado y solo modifica aquel que haya sido modificado
    };

    const controlFormulario = (e) => {
        e.preventDefault();//Evita que el navegador recargue la pagina antes de enviar los datos
        console.log("Formulario enviado:", formData); 
        alert("Gracias por tu mensaje. Te responderemos a la brevedad.");
        setFormData({ nombre: "", email: "", mensaje: "" }); //Limpia los campos del formulario
    };

    return (
        <main>
            <section className="contenido_principal">
            <h2 className="titulo_contacto">¿Tenés alguna consulta o querés dejarnos un mensaje?</h2>
            <p className="descripcion_contacto">Completá el formulario y te responderemos a la brevedad</p>

                <form className="container_formulario" onSubmit={controlFormulario}>
                    <div className="campo_formulario">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={actualizarCampos} required/>
                    </div>

                    <div className="campo_formulario">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={actualizarCampos} required/>
                    </div>
                    <div className="campo_formulario">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows="5" value={formData.mensaje} onChange={actualizarCampos} required/>
                    </div>

                <button type="submit" className="boton_formulario" id="boton_formulario">
                Enviar Mensaje
                </button>
            </form>
            </section>
        </main>
    );
    }

export default Contacto;