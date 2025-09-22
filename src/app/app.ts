import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [Sidebar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'homelife';
}
