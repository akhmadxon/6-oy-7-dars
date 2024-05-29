import { useState } from "react"
import UserModal from "../modal"
import "./cars.css"
import { NavLink } from "react-router-dom"
import { nanoid } from 'nanoid';

const Cars = () => {
	const [cars, setCars] = useState([])
	const [modal, setModal] = useState(false)
	const [seach, setSearch] = useState("")
	const deleteCar =(id)=>{
		const new_car = cars.filter(item => item.id !== id)
		setCars([...new_car])
	}
	return (
		<>
			<UserModal open={modal} toggle={()=>setModal(false)} cars={cars} setCars={setCars}/>
			<div className="container">
			<div className="row mt-3">
				<div className="col-md-10 offset-1">
					<div className="row">
						<div className="col-4">
							<button className="btn btn-success" onClick={()=>setModal(true)}>Order NOW!</button>
						</div>
						<div className="col-8">
							<input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search..." className="form-control"/>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-3">
				<table className="table table-bordered table-hover table-striped">
					<thead>
						<tr>
							<td>#</td>
							<td>ID</td>
							<td>Brand</td>
							<td>Year</td>
							<td>Price</td>
							<td>Color</td>
							<td>Transmission</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{
							cars.filter((item)=>{
								let name = item?.brand?.toLocaleLowerCase()
								let year = item?.year?.toLocaleLowerCase()
								let color = item?.color?.toLocaleLowerCase()
								let mark = item?.mark?.toLocaleLowerCase()
								let find = seach?.toLocaleLowerCase()
								if (name.includes(find) || year.includes(find) || color.includes(find) || mark.includes(find)) {
									return item
								}
							}).map((item, index)=>(
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{item.id}</td>
									<td>{item.brand}</td>
									<td>{item.year}</td>
									<td>{item.price}</td>
									<td>{item.color}</td>
									<td>{item.mark}</td>
									<td>
										<div className="d-flex gap-2 align-items-center">
											<button className="btn btn-info"><i class="fa-solid fa-pen-to-square"></i></button>
											<button className="btn btn-danger" onClick={()=>deleteCar(item.id)}><i class="fa-solid fa-trash-can"></i></button>
											<NavLink to={`/main/single-car/${item.id}`} className="btn btn-primary">
											<span><i class="fa-solid fa-circle-info"></i></span>
											</NavLink>
										</div>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
		</>
	)
}

export default Cars