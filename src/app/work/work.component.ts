import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  selectedCategory: string = 'all';
  itemsToShow: number = 4;

  workItems= [
    {
      id: 1,
      title: 'WORK 02',
      category: 'graphic-design',
      image: 'assets/images/cook.jpg',
      views: 100,
      likes: 49
    },
    {
      id: 2,
      title: 'Red Shoes',
      category: 'graphic-design',
      image: 'assets/images/converse.jpg',
      views: 85,
      likes: 32
    },
    {
      id: 3,
      title: 'Tennis Court',
      category: 'apps',
      image: 'assets/images/OIP.jpg',
      views: 120,
      likes: 56
    },
    {
      id: 4,
      title: 'Basketball',
      category: 'software',
      image: 'assets/images/basketball.jpg',
      views: 95,
      likes: 41
    },
    {
      id: 5,
      title: 'Jeans',
      category: 'software',
      image: 'assets/images/jeans.jpg',
      views: 95,
      likes: 4
    },
    {
      id: 6,
      title: 'Mug',
      category: 'software',
      image: 'assets/images/mug.jpg',
      views: 95,
      likes: 104
    },
  ];


  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.itemsToShow = 4;
  }

  get filteredItems() {
    const itemsByCategory = this.selectedCategory === 'all'
      ? this.workItems
      : this.workItems.filter(item => item.category === this.selectedCategory);

    return itemsByCategory.slice(0, this.itemsToShow);
  }

  showMore(): void {
    this.itemsToShow += 4;
  }

  get hasMoreItems(): boolean {
    return this.itemsToShow < this.workItems.length;
  }
}
