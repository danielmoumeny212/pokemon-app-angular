import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-composent',
  templateUrl: './detail-composent.component.html',
  styles: [
  ]
})
// le Service ActivatedRoute me permet d'acceder au params passer dans une url en utilisant l'attribut snapshot.paramsMap.get('params');
/* pour Naviguer on utilise une instance de l'objet Router sur laquelle on appel la methode navigate qui prend en parametre un table dans lequel on peux passer 
  des données a la vue et le chemin d'url correspondant 
*/

export class DetailComposentComponent implements OnInit {
  
  pokemonList: Pokemon[]; 
  pokemon: Pokemon | undefined; 
 
  constructor(private route: ActivatedRoute,private router: Router ){

  }
  ngOnInit(): void {
      this.pokemonList = POKEMONS; 
      const pokemonId: number | null = +this.route.snapshot.paramMap.get('pokemonId')!; 
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id === pokemonId);

  }
  
  goBack(): void {
    this.router.navigate(['/pokemons'])
  }

}
