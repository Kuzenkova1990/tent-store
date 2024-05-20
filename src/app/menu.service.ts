import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';



@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // isDropdownOpen: boolean = false;
  // menuItem: MenuItem |undefined;
  private menuItems: MenuItem[]=[
    {
      link: '/',
      label: 'Справочники',
      items: [
        {link: 'department', label:'Муниципалитет', items:[], isOpen: false, svg: ''},
        {link: 'type/auto', label:'Тип авто', items:[], isOpen: false, svg: ''},
        {link: 'department', label:'Парковки', items:[], isOpen: false, svg: ''}
      ],
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_634_1687)">
      <path d="M12 3.55005L14.85 0.700049C15.0333 0.516715 15.2667 0.425049 15.55 0.425049C15.8333 0.425049 16.0667 0.516715 16.25 0.700049C16.4333 0.883382 16.525 1.11672 16.525 1.40005C16.525 1.68338 16.4333 1.91672 16.25 2.10005L12.7 5.65005C12.5 5.85005 12.2667 5.95005 12 5.95005C11.7333 5.95005 11.5 5.85005 11.3 5.65005L9.875 4.25005C9.675 4.06672 9.57917 3.83755 9.5875 3.56255C9.59583 3.28755 9.69167 3.05005 9.875 2.85005C10.075 2.65005 10.3125 2.55005 10.5875 2.55005C10.8625 2.55005 11.1 2.65005 11.3 2.85005L12 3.55005ZM3 22.5V15.35C3 15.2334 3.00833 15.1167 3.025 15C3.04167 14.8834 3.06667 14.775 3.1 14.675L4.975 9.35005C5.10833 8.95005 5.35 8.62505 5.7 8.37505C6.05 8.12505 6.44167 8.00005 6.875 8.00005H17.125C17.5583 8.00005 17.95 8.12505 18.3 8.37505C18.65 8.62505 18.8917 8.95005 19.025 9.35005L20.9 14.675C20.9333 14.775 20.9583 14.8834 20.975 15C20.9917 15.1167 21 15.2334 21 15.35V22.5C21 22.9167 20.8542 23.2709 20.5625 23.5625C20.2708 23.8542 19.9167 24 19.5 24C19.0833 24 18.7292 23.8542 18.4375 23.5625C18.1458 23.2709 18 22.9167 18 22.5V22H6V22.5C6 22.9167 5.85417 23.2709 5.5625 23.5625C5.27083 23.8542 4.91667 24 4.5 24C4.08333 24 3.72917 23.8542 3.4375 23.5625C3.14583 23.2709 3 22.9167 3 22.5ZM5.8 13H18.2L17.15 10H6.85L5.8 13ZM7.5 19C7.91667 19 8.27083 18.8542 8.5625 18.5625C8.85417 18.2709 9 17.9167 9 17.5C9 17.0834 8.85417 16.7292 8.5625 16.4375C8.27083 16.1459 7.91667 16 7.5 16C7.08333 16 6.72917 16.1459 6.4375 16.4375C6.14583 16.7292 6 17.0834 6 17.5C6 17.9167 6.14583 18.2709 6.4375 18.5625C6.72917 18.8542 7.08333 19 7.5 19ZM16.5 19C16.9167 19 17.2708 18.8542 17.5625 18.5625C17.8542 18.2709 18 17.9167 18 17.5C18 17.0834 17.8542 16.7292 17.5625 16.4375C17.2708 16.1459 16.9167 16 16.5 16C16.0833 16 15.7292 16.1459 15.4375 16.4375C15.1458 16.7292 15 17.0834 15 17.5C15 17.9167 15.1458 18.2709 15.4375 18.5625C15.7292 18.8542 16.0833 19 16.5 19ZM5 20H19V15H5V20Z" fill="#01AC6A"/>
      </g>
      <defs>
      <clipPath id="clip0_634_1687">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>`,
      isOpen: false
    },
    {
      link: '/',
      label: 'Другое',
      items: [
        {link: 'department', label:'Муниципалитет', items:[], isOpen: false, svg: ''},
        {link: 'type/auto', label:'Тип авто', items:[], isOpen: false, svg: ''},
        {link: 'department', label:'Парковки', items:[], isOpen: false, svg: ''}
      ],
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_634_1687)">
      <path d="M12 3.55005L14.85 0.700049C15.0333 0.516715 15.2667 0.425049 15.55 0.425049C15.8333 0.425049 16.0667 0.516715 16.25 0.700049C16.4333 0.883382 16.525 1.11672 16.525 1.40005C16.525 1.68338 16.4333 1.91672 16.25 2.10005L12.7 5.65005C12.5 5.85005 12.2667 5.95005 12 5.95005C11.7333 5.95005 11.5 5.85005 11.3 5.65005L9.875 4.25005C9.675 4.06672 9.57917 3.83755 9.5875 3.56255C9.59583 3.28755 9.69167 3.05005 9.875 2.85005C10.075 2.65005 10.3125 2.55005 10.5875 2.55005C10.8625 2.55005 11.1 2.65005 11.3 2.85005L12 3.55005ZM3 22.5V15.35C3 15.2334 3.00833 15.1167 3.025 15C3.04167 14.8834 3.06667 14.775 3.1 14.675L4.975 9.35005C5.10833 8.95005 5.35 8.62505 5.7 8.37505C6.05 8.12505 6.44167 8.00005 6.875 8.00005H17.125C17.5583 8.00005 17.95 8.12505 18.3 8.37505C18.65 8.62505 18.8917 8.95005 19.025 9.35005L20.9 14.675C20.9333 14.775 20.9583 14.8834 20.975 15C20.9917 15.1167 21 15.2334 21 15.35V22.5C21 22.9167 20.8542 23.2709 20.5625 23.5625C20.2708 23.8542 19.9167 24 19.5 24C19.0833 24 18.7292 23.8542 18.4375 23.5625C18.1458 23.2709 18 22.9167 18 22.5V22H6V22.5C6 22.9167 5.85417 23.2709 5.5625 23.5625C5.27083 23.8542 4.91667 24 4.5 24C4.08333 24 3.72917 23.8542 3.4375 23.5625C3.14583 23.2709 3 22.9167 3 22.5ZM5.8 13H18.2L17.15 10H6.85L5.8 13ZM7.5 19C7.91667 19 8.27083 18.8542 8.5625 18.5625C8.85417 18.2709 9 17.9167 9 17.5C9 17.0834 8.85417 16.7292 8.5625 16.4375C8.27083 16.1459 7.91667 16 7.5 16C7.08333 16 6.72917 16.1459 6.4375 16.4375C6.14583 16.7292 6 17.0834 6 17.5C6 17.9167 6.14583 18.2709 6.4375 18.5625C6.72917 18.8542 7.08333 19 7.5 19ZM16.5 19C16.9167 19 17.2708 18.8542 17.5625 18.5625C17.8542 18.2709 18 17.9167 18 17.5C18 17.0834 17.8542 16.7292 17.5625 16.4375C17.2708 16.1459 16.9167 16 16.5 16C16.0833 16 15.7292 16.1459 15.4375 16.4375C15.1458 16.7292 15 17.0834 15 17.5C15 17.9167 15.1458 18.2709 15.4375 18.5625C15.7292 18.8542 16.0833 19 16.5 19ZM5 20H19V15H5V20Z" fill="#01AC6A"/>
      </g>
      <defs>
      <clipPath id="clip0_634_1687">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>`,
      isOpen: false
    }
  ];
  private keepMenuOpenFlag = false;

  getMenuItems():MenuItem[]{
    return this.menuItems;
  }

  toggleMenuItem(item:MenuItem){
    item.isOpen=!item.isOpen;
    this.keepMenuOpen();

    this.menuItems.forEach(i =>{
      if(i !==item){
        i.isOpen=false;
      }
    });
    if(this.keepMenuOpenFlag){
      item.isOpen = true;
    }
  }
  keepMenuOpen(){
    this.keepMenuOpenFlag = true;
  }

  resetKeepMenuOpen(){
    this.keepMenuOpenFlag = false;
  }

  // toggleDropdown():void {
  //   this.isDropdownOpen = !this.isDropdownOpen
  // }
  // toggleMenuItem(item: MenuItem){
  //   item.isOpen = !item.isOpen;
  //   this.menuItems.forEach(i => {
  //     if(i !==item) {
  //       i.isOpen = false
  //     }
  //   })
  // }

  // getItems(){
  //   return this.menuItems;
  // }

  // getItem(item: MenuItem){
  //   return this.menuItems.forEach(i => {
  //     if(i !== item){
  //       i.isOpen = false
  //     }
  //   })
  // }


  
}
