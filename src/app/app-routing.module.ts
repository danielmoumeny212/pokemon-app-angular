import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailComposentComponent } from "./detail-composent/detail-composent.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

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
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
// lors de la configuration des routes il faudra ajouter routeoutlet dans le composent racine app.component.html
// angular lis les pages du haut vers le bas quand l'operateur ** est utilisé il faut l'afficher en dernier 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
