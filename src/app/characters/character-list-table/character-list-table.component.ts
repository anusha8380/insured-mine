import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { CharactersService} from '../../characters.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-list-table',
  templateUrl: './character-list-table.component.html',
  styleUrls: ['./character-list-table.component.css']
})
export class CharacterListTableComponent {
  @Input() characters?: any;
  tableColumns = ['id','name', 'birth_year', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color'];

  constructor(public charactersService: CharactersService,
    private router: Router) {
    
  }

  showDetails(character: Character, id:number) {
    console.log(id);
    
    this.charactersService.selectedCharacter = character;
    this.router.navigate(['/characters', id]);
  }

}