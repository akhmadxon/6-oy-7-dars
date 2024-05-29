import { useState } from "react"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import { nanoid } from "nanoid"

const UserModal = (props) => {
	const [form, setForm] = useState({})
	const handleChange =(e)=>{
		const {name, value} = e.target
		setForm({...form, [name]:value})
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		let id = nanoid()
		const {cars, setCars, toggle} = props
		cars.push({...form, id})
		setCars([...cars])
		toggle()
	};
	return (
		<Modal isOpen={props.open} toggle={props.toggle}>
			<ModalHeader>
				<h1 className="text-center">Add Car</h1>
			</ModalHeader>
			<ModalBody>
				<form id="submit" onSubmit={handleSubmit}>
					<input type="text" onChange={handleChange} placeholder="Brand" className="form-control my-2" name="brand" />
					<input type="date" onChange={handleChange} placeholder="Year" className="form-control my-2" name="year" />
					<input type="number" onChange={handleChange} placeholder="Price" className="form-control my-2" name="price" />
					<input type="text" onChange={handleChange} placeholder="Color" className="form-control my-2" name="color" />
					<input type="text" onChange={handleChange} placeholder="Transmission" className="form-control my-2" name="mark" />
				</form>
			</ModalBody>
			<ModalFooter>
				<button className="btn btn-danger" onClick={props.toggle}>Cancel</button>
				<button className="btn btn-success" form="submit" type="submit">Add</button>
			</ModalFooter>
		</Modal>
	)
}

export default UserModal