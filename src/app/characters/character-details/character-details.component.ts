import { Component, OnInit } from '@angular/core';
// import { getCharacter, getCharacterMovies, State } from '../../reducers';
import { CharactersService } from '../../characters.service';
import { Character } from '../../models/character';
// import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent{
  private character: string;
  character$?: Observable<Character>;

  constructor(private route: ActivatedRoute, public charactersService: CharactersService, private router: Router) {
    this.character = this.route?.snapshot?.params['characterId'];
    this.character$ = this.charactersService?.getCharacter(this?.character);
    
  }


}