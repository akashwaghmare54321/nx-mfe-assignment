import { Component } from '@angular/core';

@Component({
  selector: 'app-mfeProducts-entry',
  standalone: true,
  template: `
    <div style="padding:20px;font-family:Arial">
      <h2>📦 Products</h2>

      <hr>

      <ul>
        <li>Laptop</li>
        <li>Mobile</li>
        <li>Keyboard</li>
        <li>Mouse</li>
      </ul>
    </div>
  `,
})
export class RemoteEntry {}