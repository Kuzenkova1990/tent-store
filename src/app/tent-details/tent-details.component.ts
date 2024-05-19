import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TentDetailService } from '../tent-detail.service';
import { Tent } from '../tent';

@Component({
  selector: 'app-tent-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tent-details.component.html',
  styleUrl: './tent-details.component.css',
})
export class TentDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  tentService = inject(TentDetailService);
  tent: Tent | undefined;

  constructor() {
    const tentItemId = Number(this.route.snapshot.params['id']);
    this.tent = this.tentService.getTent(tentItemId);
  }
}
