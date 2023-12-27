import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'side-menu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  //hacemos lo mismo que hay abajo pero son señales
  public menuItems = signal<MenuItem[]>([
    {title: 'Contador', route: 'counter' },
    {title: 'Usuario', route: 'user-info' },
    {title: 'Mutaciones', route: 'properties' },
  ]);

  // public menuItems : MenuItem[] = [
  //   {title: 'Contador', route: 'counter' },
  //   {title: 'Usuario', route: 'user-info' },
  //   {title: 'Mutaciones', route: 'properties' },
  // ];


}
