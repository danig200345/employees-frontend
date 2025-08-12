import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Checks } from './pages/checks/checks';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Checks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('dashboard-entadas-salidas');
}
