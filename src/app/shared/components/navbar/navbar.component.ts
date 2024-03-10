import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  ouvrirCV(): void {
    const urlPDF = 'assets/pdf/Noan RANDON CV.pdf';
    window.open(urlPDF, '_blank');
  }

  constructor(private router: Router) { }


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.router.navigate([], {
      fragment: sectionId,
      queryParamsHandling: 'merge'
    });
  }
  
}
