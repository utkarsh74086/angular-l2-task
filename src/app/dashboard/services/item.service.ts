import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Laptop', description: 'High performance laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Smartphone', description: 'Latest smartphone model', price: 699.99, category: 'Electronics' },
    { id: 3, name: 'Headphones', description: 'Noise cancelling headphones', price: 199.99, category: 'Accessories' },
    { id: 4, name: 'Keyboard', description: 'Mechanical keyboard', price: 129.99, category: 'Accessories' },
    { id: 5, name: 'Monitor', description: '27-inch 4K monitor', price: 399.99, category: 'Electronics' }
  ];

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItem(id: number): Observable<Item | undefined> {
    const item = this.items.find(i => i.id === id);
    return of(item);
  }

  getItemsByCategory(category: string): Observable<Item[]> {
    const filteredItems = this.items.filter(i => i.category === category);
    return of(filteredItems);
  }
}