import React from 'react'

const infoContact = [
	{
    id: 1,
		nombre: "Nadia Elizabeth Pardon Rodriguez",
		titulo: "Contacto Oficial",
		correo: "npardo@gmail.gob.mx",
		infoContacto: "4422353482 Ext. 1107 y 1108",
	},
	{
    id: 2,
		nombre: "Nadia Elizabeth Pardon Rodriguez",
		titulo: "Contacto Oficial",
		correo: "npardo@gmail.gob.mx",
		infoContacto: "4422353482 Ext. 1107 y 1108",
	},
	{
    id: 3,
		nombre: "Nadia Elizabeth Pardon Rodriguez",
		titulo: "Contacto Oficial",
		correo: "npardo@gmail.gob.mx",
		infoContacto: "4422353482 Ext. 1107 y 1108",
	},
	{
    id: 4,
		nombre: "Nadia Elizabeth Pardon Rodriguez",
		titulo: "Contacto Oficial",
		correo: "npardo@gmail.gob.mx",
		infoContacto: "4422353482 Ext. 1107 y 1108",
	},
];


const CardContact = () => {
  return (

    <div>
      {infoContact.map((contacto) => (
        <div key={contacto.id} className='grid grid-cols-2 text-2xl card gap-6'>
          <div className='name-contact'>{contacto.nombre}</div>
          <div>{contacto.correo}</div>
          <div>{contacto.titulo}</div>
          <div>{contacto.infoContacto}</div>
        </div>
      ))}
    </div>
  )
}

export default CardContact