import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css';


class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedex-card-contents'>
        {pokemons.map((pokemon) => {
         return <Pokemon key={pokemon.id} pokemon={pokemon} />
        })
        }
      </div>
    )
  }
}

export default Pokedex;