import { POKEMONS } from './mock-pokemon-list';
import { Injectable } from '@angular/core';
import { InMemoryDbService} from "angular-in-memory-web-api";


// L'heritage de cette interface a un service permet de simulé une application server qui expose les endspoints CRUD 


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{

  createDb (){
    const pokemons = POKEMONS; 
    return  {pokemons}
  }

}
