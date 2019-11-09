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

  cards: ItemInterface[] = [];
  isLoading = false;
  loadedAll = false;
  isFirstLoad = true;

  ngOnInit(): void {

    this.getCards();
    this.detectBottom();
  }

  getCards(): void {

    this.isLoading = true;
    this.apiService.fetchItems().subscribe(res => {
        if (res.length) {
          this.cards.push(...res);
        } else {
          this.loadedAll = true;
        }
        this.isLoading = false;
        this.isFirstLoad = false;
    });
  }

  detectBottom(): void {

    window.onscroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (!this.loadedAll) {
          this.apiService.paginatePage();
          this.getCards();
        }
      }
    };
  }
}
