import React, { useEffect } from 'react'
import Sidebar from './Sidebar.js'
import "./dashboard.css";
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Doughnut, Line } from 'react-chartjs-2'
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productActions"
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, LineElement, PointElement, ArcElement } from 'chart.js'
import { getAllOrders } from '../../actions/orderAction.js';
import { getAllUsers } from '../../actions/userAction.js';
ChartJS.register(
    LinearScale,
    PointElement,
    Tooltip,
    ArcElement,
    LineElement,
    CategoryScale,
)
function DashBoard() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    const { orders } = useSelector((state) => state.allOrders);
    const { user } = useSelector((state) => state.allUsers.users);
    let outOfStock = 0;

    products &&
        products.forEach((item) => {
            if (item.Stock === 0) {
                outOfStock += 1;
            }
        });

    useEffect(() => {
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
    }, [dispatch]);

    let totalAmount = 0;
    orders &&
        orders.forEach((item) => {
            totalAmount += item.totalPrice;
        });

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, totalAmount],
            },
        ],
    };

    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [outOfStock, products.length - outOfStock],
            },
        ],
    };

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='dashboardContainer'>
                <Typography component="h1">DashBoard</Typography>
                <div className='dashboardSummary'>
                    <div>
                        <p>Total Amount <br /> ₹{totalAmount}</p>
                    </div>
                </div>
                <div className='dashboardSummaryBox2'>
                    <Link to="/admin/products">
                        <p>Product</p>
                        <p>{products && products.length}</p>
                    </Link>
                    <Link to="/admin/orders">
                        <p>Orders</p>
                        <p>{orders && orders.length}</p>
                    </Link>
                    <Link to="/admin/users">
                        <p>Users</p>
                        <p>{user && user.length}</p>
                    </Link>
                </div>

                <div className="lineChart">
                    <Line data={lineState} />
                </div>
                <div className="doughnutChart">
                    <Doughnut data={doughnutState} />
                </div>
            </div>
        </div>
    )
}

export default DashBoard
