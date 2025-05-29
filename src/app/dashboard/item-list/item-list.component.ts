import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items$: Observable<Item[]> | undefined;
  selectedCategory: string = 'all';
  categories: string[] = ['all', 'Electronics', 'Accessories'];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    if (this.selectedCategory === 'all') {
      this.items$ = this.itemService.getItems();
    } else {
      this.items$ = this.itemService.getItemsByCategory(this.selectedCategory);
    }
  }

  onCategoryChange(): void {
    this.loadItems();
  }
}