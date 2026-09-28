import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nama = "Dwi Akmal Maulana";
  nim = "282102719";
  title = " Angular Bootstrap";
}
