import { Component } from '@angular/core';

@Component({
  selector: 'app-fail-poke',
  standalone: true,
  imports: [],
  templateUrl: './fail-poke.component.html',
  styleUrl: './fail-poke.component.scss',
})
export class FailPokeComponent {
  public title: string = 'No pokémon found.';
}
