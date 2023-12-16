import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex.model';
import { ModalPokeComponent } from '../modal-poke/modal-poke.component';

@Component({
  selector: 'app-card-poke',
  standalone: true,
  imports: [ModalPokeComponent],
  templateUrl: './card-poke.component.html',
  styleUrl: './card-poke.component.scss',
})
export class CardPokeComponent {
  @Input() public data: null | Pokemon = null;
}
