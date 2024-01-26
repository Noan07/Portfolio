import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./portfolio.component";
import { NgModule } from "@angular/core";
import { HeaderSectionComponent } from "../../shared/components/header-section/header-section.component";
import { AboutSectionComponent } from "../../shared/components/about-section/about-section.component";
import { PortfolioSectionComponent } from "../../shared/components/portfolio-section/portfolio-section.component";
import { SkillsSectionComponent } from "../../shared/components/skills-section/skills-section.component";
import { ContactSectionComponent } from "../../shared/components/contact-section/contact-section.component";

const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent,
    }
]

@NgModule({
    declarations: [PortfolioComponent],
    imports: [RouterModule.forChild(routes), HeaderSectionComponent, AboutSectionComponent, PortfolioSectionComponent, SkillsSectionComponent, ContactSectionComponent]
})
export class PortfolioModule {}