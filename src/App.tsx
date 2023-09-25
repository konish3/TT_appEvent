import React, { useEffect } from 'react';
import './app.scss';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchCards } from './store/reducers/ActionCreators';
import { Catalog } from './components/main/catalog/Catalog';
import { Cart } from './components/main/cart/Cart';
import { Route, Routes } from 'react-router-dom';



function App() {
  
  const {cards, isLoading, error} = useAppSelector((state) => state.cardReducer)
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(fetchCards())
  }, [])

  return <div className="wrapper">
    <Header />
    <main className="main">
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </main>
    <Footer /> 
  </div>
  ;
}

export default App;
