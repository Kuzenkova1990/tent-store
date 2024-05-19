import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { TentDetailService } from '../tent-detail.service';
import { Tent } from '../tent';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
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
