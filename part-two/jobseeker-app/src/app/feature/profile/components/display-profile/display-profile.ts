import { Component, signal } from '@angular/core';
import { Profile } from '../profile/profile';
import { ProfileModel } from '../../../models/profile-model';
import { profilesMock } from '../../../profiles-mock';

@Component({
  selector: 'app-display-profile',
  imports: [Profile],
  templateUrl: './display-profile.html',
  styleUrl: './display-profile.scss',
})
export class DisplayProfile {
  profiles = signal<ProfileModel[]>(profilesMock);
}
