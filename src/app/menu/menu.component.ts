import { Component, Input, inject } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuService } from '../menu.service';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NgFor, NgIf, NgForOf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() menuItems!: MenuItem[];

  constructor(private router: Router, private menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }

  toggleMenuItem(item: MenuItem){
    this.menuService.toggleMenuItem(item);
  }
  keepMenuOpen(){
    this.menuService.keepMenuOpen
  }

  resetKeepMenuOpen(){
    this.menuService.resetKeepMenuOpen();
  }

  // @Input() menuItem!: MenuItem;
  // route: ActivatedRoute = inject(ActivatedRoute);
  // isDropdownOpen:boolean = false;
  // menuItems = inject(MenuService);
  // MenuItem[] = inject(MenuService);
  
    
      
    
  }




