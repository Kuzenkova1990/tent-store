import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { TentDetailService } from '../tent-detail.service';
import { Tent } from '../tent';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tentList: Tent[] = [];
  tentService: TentDetailService = inject(TentDetailService);

  constructor() {
    this.tentList = this.tentService.getTents();
  }
}
