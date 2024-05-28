import ContactIcon from "../assets/contact.png";
import EmailIcon from "../assets/email.png";
import PhoneIcon from "../assets/phone-call.png";
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
				<div key={contacto.id} className="bg-blue-400 m-2 rounded-2xl w-fit p-4">
					<div className="flex justify-center font-bold p-1">Contacto Oficial</div>
					<div className="grid grid-cols-3 gap-1">
						<div className="flex items-center justify-center col-span-1 gap-y-3">
							<img
								className="w-[70px] h-[70px] -translate-y-3"
								src={ContactIcon}
								alt="Contact Image"
							/>
						</div>
						<div className="col-span-2 space-y-2">
							<div>{contacto.nombre}</div>
							<div className="flex items-center gap-1"> 
								<img src={EmailIcon} alt="Icon Email" className="w-[20px] h-[20px]" /> 
								{contacto.correo}
							</div>
							<div className="flex items-center gap-1"> 
								<img src={PhoneIcon} alt="Phone Email" className="w-[20px] h-[20px]" /> 
								{contacto.infoContacto}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default CardContact;
