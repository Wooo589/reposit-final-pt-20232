import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';

import Nav from './Nav';

import './styles.css';
import Search from './Search';
import Menu from './Menu';

import { getItems } from '../../services/api';

const userId = '65acd8bc0301d10fa1b1ccd8'

const MainPage = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = '') => {
      const response = await getItems(userId);

      setItems(response.data);
    }

    useEffect(() => {
      (async() => await loadData())();
    }, []);

  if(loadingError) {
    return (
      <div className="loading">
        Erro ao carregar os dados do cardápio
      </div>
    )
  }

  if (loading) {
    return (
      <div className="loading">
        Carregando...
      </div>
    )
  }

  return (

    <div id="main">

      <Nav onLogout={handleLogout} />

      <Search onSearch={handleSearch} />

      <Menu 
        items={items} 
        onDeleteItem={handleDeleteItem}
        onNewItem={handleNewItem}
         />

    </div>

  )
}

export default MainPage;
