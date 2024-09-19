import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './Layout'
import Home from './Home'
import Orders from './Orders'
import ViewOrders from './ViewOrders'
import OrderDetails from './OrderDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path='/' element = {<Home/>}/>
                <Route exact path='/orders' element = {<Orders/>}/>
                <Route exact path='/vieworders' element = {<ViewOrders/>}/>
                <Route exact path='/orderdetails/:id' element = {<OrderDetails/>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
)
