import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.fetchItems().subscribe(res => {

      console.log(res);
    });
  }
}
