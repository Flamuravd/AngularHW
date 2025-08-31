import { Component, input } from '@angular/core';
import { ProfileModel } from '../../../models/profile-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  profile = input.required<ProfileModel>();
}
