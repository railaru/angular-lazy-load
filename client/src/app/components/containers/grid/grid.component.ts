import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

import ItemInterface from '../../../interfaces/item.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  cards: ItemInterface[];

  ngOnInit(): void {

    this.apiService.fetchItems().subscribe(res => {
      this.cards = res;
    });
  }
}
