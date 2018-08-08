import { Component } from '@angular/core';

import { TranslationRow } from './interfaces/translations-row';

const MOCK_DATA: TranslationRow[] = [
  { guid: "ABC-000-000", english: "Hello", deutsch: "Hallo", francais: "Salut", espanol: "Hola", italiano: "", polski: "Czesc" }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['id', 'english', 'francais', 'espanol', 'italiano', 'polski'];
  dataSource = MOCK_DATA;
}
