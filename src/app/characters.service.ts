import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './models/character';
import { Observable, map } from 'rxjs';

const CHARACTER_HTTP_URL_LENGTH = `https://swapi.dev/api/people/`.length;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  selectedCharacter?: Character;

  constructor(private http: HttpClient) {
  }

  getCharactersList(pageNumber = 1): Observable<any> {
    return this.http.get<Character>(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .pipe(map((characters => {
        // console.log("--characters--:",characters);
        
          // characters.forEach(character => {
          //   character.id = this.getCharacterId(character.url);
          // });
          return characters;
        }
      )));
  }

  

  getCharacter(characterId: string | undefined): Observable<Character> {
    console.log(characterId);
    
    return this.http.get<Character>(`https://swapi.dev/api/people/${characterId}`)
    .pipe(map(character => {
      character.id = this.getCharacterId(character.url);
      return character;
    }));
  }

  private getCharacterId(characterUrl: string): number {
    return parseInt(characterUrl.substring(CHARACTER_HTTP_URL_LENGTH, characterUrl.length - 1), 10);
  }
}
