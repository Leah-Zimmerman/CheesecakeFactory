import { useState } from "react";



const Orders = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [base, setBase] = useState('');
    const [toppings, setToppings] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');
    const [qty, setQty] = useState('1');
    const [date, setDate] = useState('');
    const [total, setTotal] = useState('');

    const handleToppingChange = e => {
        const topping = e.target.name;
        const checked = e.target.checked;
        const prevToppings = toppings.split(', ').filter(Boolean);

        if (checked) {
            const updatedToppings = [...prevToppings, topping].join(', ');
            setToppings(updatedToppings);
            setTotal(total+1);
            console.log(updatedToppings);
        }
        else {
            const updatedToppings = prevToppings.filter(t => t != topping).join(', ');
            setToppings(updatedToppings);
            setTotal(total-1);
            console.log(updatedToppings);
        }
    }

    return <>
        <div className="container" style={{ marginTop: '80px' }}>
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={e => setName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                    <select className="form-select" onChange={e => setBase(e.target.value)} value={base}>
                        <option value="Choose...">Choose...</option>
                        <option value="Classic">Classic</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Red Velvet">Red Velvet</option>
                        <option value="Brownie">Brownie</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Toppings (each topping adds on an additional $3.95)</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Chocolate Chips" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Chocolate Chips</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Caramel Drizzle" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Caramel Drizzle</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Whipped Cream" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Whipped Cream</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Pecans" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Pecans</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Almonds" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Almonds</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Toasted Coconut" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Toasted Coconut</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Graham Cracker Crumble" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Graham Cracker Crumble</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Cookie Dough" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Cookie Dough</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Mint Chocolate Chips" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Mint Chocolate Chips</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Caramelized Bananas" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Caramelized Bananas</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Rainbow Sprinkles" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Rainbow Sprinkles</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Powdered Sugar" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Powdered Sugar</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="White Chocolate Shavings" onChange={handleToppingChange}></input>
                        <label className="form-check-label">White Chocolate Shavings</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Peanut Butter Drizzle" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Peanut Butter Drizzle</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Dark Chocolate Drizzle" onChange={handleToppingChange}></input>
                        <label className="form-check-label">Dark Chocolate Drizzle</label>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea className="form-control" rows="4" style={{ width: '100%' }} value={specialRequest} onChange={e=>setSpecialRequest(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" name="qty" value={qty} onChange={e => setQty(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input type="date" className="form-control" name="date" value={date} onChange={e => setDate(e.target.value)}></input>
                    </div>
                    <button className="btn btn-primary" disabled={!name || !email || !base || !qty || !date}>Submit Order</button>
                </div>
            </div>
            <div className="col-md-6 position-sticky" style={{ top: '2rem' }}>
                <h2 className="mb-4">Live Preview</h2>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://www.shutterstock.com/image-photo/cheesecake-slice-on-white-background-260nw-1856717266.jpg" className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">Your Custom Cheesecake</h5>
                        <p className="card-text">Base: {base}</p>
                        <p className="card-text">Toppings: {toppings}</p>
                        <p className="card-text">Special Requests: {specialRequest}</p>
                        <p className="card-text">Quantity: {qty}</p>
                        <p className="card-text">Delivery Date: {date}</p>
                        <p className="card-text fw-bold">Total: ${((49.99+(3.95*total))*qty).toFixed(2)}</p>
                    </div>
                </div>
                
            </div>

        </div>
    </>
}

export default Orders;