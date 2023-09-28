import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public films: { titre_film : string, affiche_film : string}[] = [
    {titre_film : 'Harry Potter et la Coupe de Feu', affiche_film: '../../assets/Harry Potter.png' },
    {titre_film : 'Barbie', affiche_film: '../../assets/Barbie.png' },
    {titre_film : 'Naruto the Last, le film', affiche_film: '../../assets/Naruto.png' },
    {titre_film : "De l'autre côté du miroir", affiche_film: '../../assets/Alice.png' },
    {titre_film : 'Pokémon, le film : Les Secrets de la jungle', affiche_film: '../../assets/pokemon.png' }
  ]

  public film: { titre_film: string, affiche_film: string } | null = null;

  public afficherFilm(film: { titre_film: string, affiche_film: string }) {
    this.film = film;
  }

}
