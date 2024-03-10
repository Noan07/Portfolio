import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../header-section/header-section.component";

@Component({
    selector: 'app-portfolio-section',
    standalone: true,
    templateUrl: './portfolio-section.component.html',
    styleUrl: './portfolio-section.component.css',
    imports: [HeaderSectionComponent]
})
export class PortfolioSectionComponent {

}
