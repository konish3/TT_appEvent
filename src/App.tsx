import React, { useEffect } from 'react';
import './app.scss';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchCards } from './store/reducers/ActionCreators';



function App() {
  
  const {cards, isLoading, error} = useAppSelector((state) => state.cardReducer)
  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(fetchCards())
  }, [])

  return <div className="wrapper">
    <Header />
    <Main />
    <Footer /> 
  </div>
  ;
}

export default App;
