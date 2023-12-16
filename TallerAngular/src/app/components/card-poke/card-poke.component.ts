import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex.model';

@Component({
  selector: 'app-card-poke',
  standalone: true,
  imports: [],
  templateUrl: './card-poke.component.html',
  styleUrl: './card-poke.component.scss',
})
export class CardPokeComponent {
  @Input() public data: null | Pokemon = null;
}
