import { Injectable } from "@angular/core";
import { Pokemon } from "../pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";
@Injectable()

// tout service dans une application angular doit avoir le décorateur injectable
// pour injecter un service dans un module en particulier  on retire l'attribut provideIn @Injectable
// puis on ajoute le service en question dans le module concernée ici le module pokemon
export class PokemonService {
  constructor(private http: HttpClient) {}
  
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("/api/pokemons").pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonByID(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ "content-type": "application/json" }),
    };
    return this.http.put<Pokemon>("api/pokemons", pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }
  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`/api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }
  
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ "content-type": "application/json" }),
    };
    return this.http.post<Pokemon>("api/pokemons/", pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
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
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
