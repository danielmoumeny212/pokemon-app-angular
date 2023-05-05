import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailComposentComponent } from "./detail-composent/detail-composent.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from "../auth.guard";

const pokemonRoutes: Routes = [
  {
    path: 'pokemon/add',
    component: AddPokemonComponent,
  },
  {
    path: "pokemon/edit/:pokemonId",
    component: EditPokemonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pokemon/:pokemonId",
    component: DetailComposentComponent,
  },
  
  {
    path: "pokemons",
    component: ListPokemonComponent,
  },
  
];

// Les routes se declarent dans les imports  via RouterModule.forChild(routes); pour les routes enfants
// Le module @FormModule doit etre importé dans tout les modules qui on en besion

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailComposentComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes), FormsModule],
  providers: [PokemonService],
})
export class PokemonModule {}
