import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
