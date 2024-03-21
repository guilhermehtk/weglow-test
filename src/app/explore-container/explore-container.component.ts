import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  loading: boolean = false;

  constructor(private router: Router) {}

  showVersions(): void {
    this.router.navigate(['/versions']);
  }
}
