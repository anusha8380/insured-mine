import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';

const routes: Routes = [
  {path: 'characters', component: CharactersListComponent},
  {path: 'characters/:characterId', component: CharacterDetailsComponent},
  {
    path: '**',
    redirectTo: 'characters',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
