import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ["Spiderman","Hulk","Thor","Ironman","Antman","Deadpool"] ;

  public deletedhero?: string;

  removeLastHero(): void {
    this.deletedhero = this.heroName.pop();
  }

}
