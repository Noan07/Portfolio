import { Component, Input } from '@angular/core';
import { CardSkillComponent } from '../card-skill/card-skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-skills',
  standalone: true,
  imports: [CardSkillComponent, CommonModule],
  templateUrl: './card-skills.component.html',
  styleUrl: './card-skills.component.css'
})
export class CardSkillsComponent {
  @Input() generalTitle: string = '';
  @Input() progressItems: { titles: string[]; percentage: number }[] = [];
}
