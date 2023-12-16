import { Component, Input } from '@angular/core';
import { PokemonAbilities } from '../../models/pokedex.model';

@Component({
  selector: 'app-modal-poke',
  standalone: true,
  imports: [],
  templateUrl: './modal-poke.component.html',
  styleUrl: './modal-poke.component.scss',
})
export class ModalPokeComponent {
  @Input() public data: undefined | PokemonAbilities[] = [];
}
