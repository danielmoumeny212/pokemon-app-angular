import { Injectable } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pokemon-list";
@Injectable()

// tout service dans une application angular doit avoir le décorateur injectable
// pour injecter un service dans un module en particulier  on retire l'attribut provideIn @Injectable 
// puis on ajoute le service en question dans le module concernée ici le module pokemon
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
