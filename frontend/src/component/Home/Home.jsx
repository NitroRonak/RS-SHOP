import React, { Fragment, useEffect } from 'react'
import '../Home/Home.css'
import ProductCard from './ProductCards'
import MetaData from '../layout/MetaData'
import { clearErrors, getProduct } from '../../actions/productActions';
import { useSelector, useDispatch } from "react-redux";
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert'
import MyImg from './Myproject.png'
function Home() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      {
        loading ?
          (<Loader />) : (
            <>
              <MetaData title="RS-SHOP" />
              <div className='txtContainer'>
                <div className='textContainerDiv1'>
                  <h1><span className='s1'>Welcome </span><span className='s2'>To</span></h1>
                  <h1><span className='s3'>RS</span><span className='s4'>SHOP</span></h1>
                  <h2>Let's Do <span className='shopping'>Shopping</span></h2>
                  <center><a href="#container" id='scrollA'><button id='scrollBtn'>SCROLL</button></a></center>
                </div>
                <div className='textContainerDiv2'>
                  <div id='empty'>
                    <img src={MyImg} id="emptyImg" alt="" />
                  </div>
                </div>
              </div>
              <h2 className="homeHeading">Featured Products</h2>
              <div className="container" id="container">
                {
                  products && products.map((product) => <ProductCard key={product._id} product={product} />)
                }
              </div>
            </>
          )
      }
    </Fragment>
  )
}
export default Home
