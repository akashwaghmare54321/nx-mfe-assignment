import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiLibrary } from '@nx-mfe-assignment/ui-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, UiLibrary],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Host Application';

  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }
}