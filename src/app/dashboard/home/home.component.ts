import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredItems: Item[] = [];
  isLoading = true;
  showWelcomeMessage = true;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadFeaturedItems();
    setTimeout(() => {
      this.showWelcomeMessage = false;
    }, 3000);
  }

  loadFeaturedItems(): void {
    this.itemService.getItems().subscribe(items => {
      this.featuredItems = items.slice(0, 3); 
      this.isLoading = false;
    });
  }
}