import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})

export class ContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensagem: new FormControl('', Validators.required)

    })
  }


  salvarContato() {
    if (this.contatoForm.valid) {
      this.apiService.sendEmail(this.contatoForm.value).subscribe({
        next: (resposta)=>{
          this.contatoForm.reset();
        },
        error:(error=>{
          alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
        })
      })
    }else{
      this.contatoForm.markAllAsTouched();
    }
  }

}
