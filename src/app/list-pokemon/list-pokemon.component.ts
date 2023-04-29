import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  pokemonSelected: Pokemon | undefined;



  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (p) => p.id === +pokemonId
    );
    if (pokemon) {
      this.pokemonSelected = pokemon;
    } else {
      this.pokemonSelected = pokemon;
      console.log(`Vous avez demandé un pokemon qui n'existe pas `);
    }

    console.log(
      `vous avez cliqué sur le pokemon ${this.pokemonList[+pokemonId].name}`
    );
  }
}



