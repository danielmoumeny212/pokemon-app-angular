import { Injectable } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pokemon-list";

@Injectable({
  providedIn: "root",
})

// tout service dans une application angular doit avoir le décorateur injectable
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonByID(id: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id === id);
  }
  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      'Fée',
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
