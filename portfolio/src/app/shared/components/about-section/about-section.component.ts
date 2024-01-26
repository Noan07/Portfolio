import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../header-section/header-section.component";

@Component({
    selector: 'app-about-section',
    standalone: true,
    templateUrl: './about-section.component.html',
    styleUrl: './about-section.component.css',
    imports: [HeaderSectionComponent]
})
export class AboutSectionComponent {

}
