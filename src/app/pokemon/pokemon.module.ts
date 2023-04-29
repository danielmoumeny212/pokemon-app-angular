import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailComposentComponent } from "./detail-composent/detail-composent.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";

const pokemonRoutes: Routes = [
  {
    path: "pokemons",
    component: ListPokemonComponent,
  },
  {
    path: "pokemon/:pokemonId",
    component: DetailComposentComponent,
  },
];

// Les routes se declarent dans les imports  via RouterModule.forChild(routes); pour les routes enfants 

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailComposentComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
})
export class PokemonModule {}
