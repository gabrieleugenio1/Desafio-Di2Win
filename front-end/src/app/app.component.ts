import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

}


export async function getUsers() {
  const result = await fetch('localhost:3000/users', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(res => res.json())

  return result
}

export async function getExtracts() {
  const result = await fetch('localhost:3000/extracts/count', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(res => res.json())

  return result
}


