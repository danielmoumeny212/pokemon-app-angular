import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailComposentComponent } from "./detail-composent/detail-composent.component";

const routes: Routes = [
  {
    path: "pokemons",
    component: ListPokemonComponent,
  },
  {
    path: "pokemon/:pokemonId",
    component: DetailComposentComponent,
  },
  {
    path: "",
    redirectTo: "pokemons", // route par default
    pathMatch: "full",
  },
];
// lors de la configuration des routes il faudra ajouter routeoutlet dans le composent racine app.component.html

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
