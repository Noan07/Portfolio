import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { CardSkillsComponent } from '../card-skills/card-skills.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [HeaderSectionComponent, CardSkillsComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {
  titleTechnologies: string = 'Technologies';
  progressTechnologies: { titles: string[]; percentage: number }[] = [
    { titles: ['Python','C#','Swift'], percentage: 80 },
    { titles: ['PHP','Symfony'], percentage: 70 },
    { titles: ['Angular','Swift','HTML','CSS'], percentage: 90 },
  ];
  titleTools: string = 'Outils';
  progressTools: { titles: string[]; percentage: number }[] = [
    { titles: ['Git'], percentage: 80 },
    { titles: ['Linux','Windows'], percentage: 80 },
    { titles: ['MacOs'], percentage: 60 },
    { titles: ['MariaDb','PostgreSql','MySql'], percentage: 85 },
    { titles: ['Docker','Kubernetes'], percentage: 90 },
  ];
  titleMethodologies: string = 'Methodologies';
  progressMethodologies: { titles: string[]; percentage: number }[] = [
    { titles: ['Scrum','Kanban'], percentage: 80 },
    { titles: ['UML'], percentage: 70 },
    { titles: ['TDD'], percentage: 60 },
    { titles: ['DevOps'], percentage: 50 },
  ];
}
