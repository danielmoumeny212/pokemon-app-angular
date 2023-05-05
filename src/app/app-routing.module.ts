import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "pokemons", // route par default
    pathMatch: "full",
  },
  {
     path: 'login',
     component: LoginComponent,
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
