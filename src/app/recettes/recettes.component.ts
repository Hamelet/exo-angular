import { Component, OnInit } from '@angular/core';
import { Recette } from './recette.model';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {

  selectedRecette: Recette;

  constructor() { }

  ngOnInit() {
  }

}
