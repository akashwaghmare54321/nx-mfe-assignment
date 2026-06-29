import { Component } from '@angular/core';

@Component({
  selector: 'app-mfeDashboard-entry',
  standalone: true,
  template: `
    <div style="padding:20px;font-family:Arial">
      <h2> Dashboard</h2>

      <hr>

      <div style="margin-top:20px">
        <p><strong>Users :</strong> 50</p>
        <p><strong>Orders :</strong> 20</p>
        <p><strong>Revenue :</strong> ₹1,20,000</p>
      </div>
    </div>
  `,
})
export class RemoteEntry {}