import HomePage from '../views/HomePage';
import DetailPage from '../views/DetailPage';
import FormPage from '../views/FormPage';
import NavBar from './NavBar';
import { Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../redux/actions';
import Footer from './Footer';

const RoutesWithNavBar = () => {

  const dispatch = useDispatch();

  function onSearch(name) {
    dispatch(searchPokemon(name)); // Despacha la acción para buscar el Pokémon
  };
  
    return (
      <>
        <NavBar onSearch={onSearch}/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/form" component={FormPage} />
        </Switch>
        <Footer />
      </>
    );
  };

export default RoutesWithNavBar;