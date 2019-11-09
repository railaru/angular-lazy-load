import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import ItemInterface from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'http://localhost:5000/api/items';

  constructor(private http: HttpClient) { }

  fetchItems(): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(this.apiUrl);
  }
}
