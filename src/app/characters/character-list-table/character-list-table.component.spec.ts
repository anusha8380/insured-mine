import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListTableComponent } from './character-list-table.component';

describe('CharacterListTableComponent', () => {
  let component: CharacterListTableComponent;
  let fixture: ComponentFixture<CharacterListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterListTableComponent]
    });
    fixture = TestBed.createComponent(CharacterListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
