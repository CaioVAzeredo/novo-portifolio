import { Component } from '@angular/core';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { HeroComponent } from "../../componentes/hero/hero.component";
import { SobreComponent } from "../../componentes/sobre/sobre.component";
import { TrabalhoComponent } from "../../componentes/trabalho/trabalho.component";
import { ContatoComponent } from "../../componentes/contato/contato.component";
import { FooterComponent } from "../../componentes/footer/footer.component";
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-principal',
  imports: [
    HttpClientModule,
    CabecalhoComponent, 
    HeroComponent, 
    SobreComponent, 
    TrabalhoComponent, 
    ContatoComponent, 
    FooterComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
