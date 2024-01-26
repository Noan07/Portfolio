import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {

}
