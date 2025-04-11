import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { HeroComponent } from "./componentes/hero/hero.component";
import { TrabalhoComponent } from "./componentes/trabalho/trabalho.component";
import { SobreComponent } from "./componentes/sobre/sobre.component";
import { ContatoComponent } from "./componentes/contato/contato.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { CarouselComponent } from "./componentes/carousel/carousel.component";


@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    HeroComponent,
    SobreComponent,
    ContatoComponent,
    FooterComponent,
    CarouselComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
