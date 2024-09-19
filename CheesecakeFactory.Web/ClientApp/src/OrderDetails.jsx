import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

const OrderDetails = () => {

    const [order, setOrder] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getOrderById = async () => {
            const { data } = await axios.get('/api/cheesecake/getOrderById', {params:{id}});
            setOrder(data);
        }
        console.log('hi');
        getOrderById();
    }, [id])

    const { name, email, base, toppings, specialRequest, qty, date, total } = order;
    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <div className="card shadow text-center p-3 mb-5 rounded bg-body" style={{width:'30rem', backgroundColor:'rgb(248,249,250)'}}>
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{name}</h3>
                        <p className="card-text fs-5">{email}</p>
                        <p className="card-text fs-5">{base}</p>
                        <p className="card-text fs-5">{toppings}</p>
                        <p className="card-text fs-5">{specialRequest}</p>
                        <p className="card-text fs-5">{qty}</p>
                        <p className="card-text fs-5">{dayjs(date).format("MM/DD/YYYY")}</p>
                        <p className="card-text fs-5">${total}</p>
                        <Link to="/viewOrders">
                            <button className="btn btn-primary w-100">Back to Orders</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default OrderDetails;