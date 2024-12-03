import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 45;

  get capitalixedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  ChangeHero(): void {
    this.name = "Thor"
  }

  ChangeAge(): void{
    this.age = 300
  }

  ResetForm(): void{
    this.name = "ironman"
    this.age = 45
  }
}
