import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersionsComponent } from './versions.component';
import { VersionsRoutingModule } from './versions-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    IonicModule,
    CommonModule,
    FormsModule,
    VersionsRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [VersionsComponent],
})
export class VersionsComponentModule {}
