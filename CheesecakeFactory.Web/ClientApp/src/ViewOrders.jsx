import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { Link } from "react-router-dom";

function ViewOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/api/cheesecake/getorders');
            setOrders(data);
        }
        getOrders();
    }, [])

    return <>
        <div className="d-flex justify-content-center">
            <table className="text-center shadow-lg" style={{ borderCollapse: 'separate', borderSpacing: '0px 15px', maxWidth: '80%' }}>
                <thead>
                    <tr style={{ backgroundColor: 'rgb(33,37,41)', color: 'white', borderRadius: '15px' }}>
                        <th>Name/Email</th>
                        <th>Base Flavor</th>
                        <th>Toppings</th>
                        <th>Special Request</th>
                        <th>Quantity</th>
                        <th>Delivery Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {!!orders.length && orders.map((o, i) => (
                        <tr key={i} style={{ backgroundColor: 'rgb(248,249,250)', borderRadius: '15px' }}>

                            <td style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                                <Link to={`/orderdetails/${o.id}`}>
                                    {o.name} - {o.email}
                                </Link>
                            </td>
                            <td>{o.base}</td>
                            <td>{o.toppings ? o.toppings : 'N/A'}</td>
                            <td>{o.specialRequest ? o.specialRequest : 'N/A'}</td>
                            <td>{o.qty}</td>
                            <td>{dayjs(o.date).format("MM/DD/YYYY")}</td>
                            <td>${o.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}

export default ViewOrders;