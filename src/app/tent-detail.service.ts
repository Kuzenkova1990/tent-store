import { Injectable } from '@angular/core';
import { Tent } from './tent';

@Injectable({
  providedIn: 'root',
})
export class TentDetailService {
  tentList: Tent[] = [
    {
      id: 1,
      name: 'Палатка Trek Planet Vario Nexo 4',
      photo: './assets/img/tent-3.jpg',
      color: 'Зеленый',
      numberOfPlaces: 4,
      size: '300x600x200',
      comound: 'Полиэстер, пропитка PU',
      weight: 15,
      prise: 33900,
    },
    {
      id: 2,
      name: 'Палатка Indiana Tramp 2',
      photo: './assets/img/tent-2.jpg',
      color: 'Зеленый',
      numberOfPlaces: 2,
      size: '325x160x135',
      comound: 'Polyester 75D, 180T',
      weight: 4.65,
      prise: 8600,
    },
    {
      id: 3,
      name: 'Палатка автомат Jungle Camp Easy Tent 2',
      photo: './assets/img/tent-1.jpg',
      color: 'Зеленый',
      numberOfPlaces: 2,
      size: '300x160x135',
      comound: 'Polyester 75D, 180T, пропитка PU',
      weight: 2.8,
      prise: 3900,
    },
    {
      id: 4,
      name: 'Палатка Trek Planet Bergamo 2',
      photo: './assets/img/tent-4.jpg',
      color: 'Зеленый',
      numberOfPlaces: 4,
      size: '160x(220+85)x125',
      comound: 'Полиэстер, пропитка PU',
      weight: 3.3,
      prise: 9800,
    },
    {
      id: 5,
      name: 'Шатер Trek Planet Picnic Tent',
      photo: './assets/img/tent-5.jpg',
      color: 'Серый',
      numberOfPlaces: 4,
      size: '300x320x225',
      comound: 'Полиэстер, пропитка PU',
      weight: 9.6,
      prise: 16500,
    },
    {
      id: 6,
      name: 'Палатка Indiana Hogar 3 ',
      photo: './assets/img/tent-6.jpg',
      color: 'Зеленый',
      numberOfPlaces: 3,
      size: '320x225x130',
      comound: 'Polyester 75D 180T',
      weight: 3.9,
      prise: 8300,
    },
  ];

  getTents() {
    return this.tentList;
  }
  getTent(id: number) {
    return this.tentList.find((tent) => tent.id === id)!;
  }
}
