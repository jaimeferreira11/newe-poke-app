import React, { useCallback, useEffect, useState } from 'react'
import { getPokemons } from '../../helpers/getPokemon';
import { Footer } from '../shared/Footer';
import { Navbar } from '../shared/Navbar';
import { NotFoundPokemon } from './components/NotFoundPokemon';
import { Welcome } from './components/Welcome';

export const Home = () => {

  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  // const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchUsers = useCallback(
    async (offset: number, limit = perPage) => {
      setLoading(true);

      const data = await getPokemons(limit, offset);
       setData(data.data);
      /*setFilteredItems(data.data);
      setTotalRows(data.total) */;
      console.log(data);
      
      setLoading(false);
    },
    [perPage]
  );


  useEffect(() => {
    fetchUsers(0);
  }, [fetchUsers]);

  
  return (
    <div>

        <Navbar />

        <Welcome />

        
        <NotFoundPokemon  />
        <Footer />
    </div>
  )
}
