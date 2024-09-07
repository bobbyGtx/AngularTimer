import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MyComponent} from "./dop9-component/dop9-component.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dop1-app';
}
