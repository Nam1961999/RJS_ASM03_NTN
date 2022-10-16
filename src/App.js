import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, json, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import ShopPage from './ShopPage/ShopPage';
import CartPage from './CartPage/CartPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import DetailPage from './DetailPage/DetailPage';
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer';

export const DataContext = createContext()



function App() {
	const [data, setData] = useState([])
	const [userInfo, setUserInfo] = useState(null);

	useEffect(() => {
		// console.log(JSON.stringify(data))
		fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
		).then(results => results.json())
			.then(res => {
				// console.log(res)
				const data = res;
				setData(data)

			});


	}, []);

	const updateUser = (userInfo) => {
		localStorage.setItem("userInfo", JSON.stringify(userInfo));
		setUserInfo(userInfo);
		// console.log(JSON.stringify(userInfo));
	}

	useEffect(()=>{
		let user = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
		setUserInfo(user);
	}, []);
	
	return (
		<DataContext.Provider value={data}>
			<Router>
				<NavBar userInfo = {userInfo} updateUser={updateUser} />
				<Routes>
					<Route exact path="/" element={<HomePage data={data}  />} />
					<Route path='/shop' element={<ShopPage data={data} />} />
					<Route path='/cart' element={<CartPage data={data} user={userInfo} updateUser={updateUser}/>} />
					<Route path='/checkout' element={<CheckoutPage data={data} user={userInfo}/>} />
					<Route path='/login' element={<LoginPage data={data}  functionCallback={updateUser} />}  />
					<Route path='/register' element={<RegisterPage data={data}  />} />
					<Route path='/detail/:id' element={<DetailPage data={data} user={userInfo} updateUser={updateUser}/>} />
				</Routes>
				<Footer />
			</Router>
		</DataContext.Provider>


	);
}

export default App;
