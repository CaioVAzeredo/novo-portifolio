import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-trabalho',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {
  trabalhos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/trabalhos.json')
      .subscribe(data => {
        this.trabalhos = data.trabalhos;
      });
  }
}