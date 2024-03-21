import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

const API_URL = 'https://api.weglowapp.net/v1/version';

type API_RESPONSE = {
  android: string;
  ios: string;
};

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss'],
})
export class VersionsComponent {
  android?: string;
  ios?: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchVersions();
  }

  async fetchVersions(): Promise<void> {
    const { android, ios } = await firstValueFrom(
      this.http.get(API_URL) as Observable<API_RESPONSE>
    );

    this.android = android;
    this.ios = ios;
  }
}
