import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    imageSrc: string | null = null;

    handleFileInput(event: any): void {
      const file = event.target.files[0];

      if (file) {
        this.createImageObjectUrl(file);
      }
    }

    createImageObjectUrl(file: File): void {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(file);
    }
}
