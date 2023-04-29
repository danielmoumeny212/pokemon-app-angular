import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";
import { FormsModule } from "@angular/forms";

/**
 *  un composant ne peux être definir dans plusieurs module pareil pour les directives et les pipes
 * pour declarer un module on inclut le module dans l'attribut import @NgModule qui est un tableau 
 */

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    AppRoutingModule, 

    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
