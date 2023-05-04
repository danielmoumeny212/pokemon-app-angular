import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from 'src/app/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined; 
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
      const pokemonId: number = +this.route.snapshot.paramMap.get('pokemonId')!;
      this.pokemonService
      .getPokemonByID(pokemonId)
      .subscribe((pokemon) => (this.pokemon = pokemon));

  }
}
