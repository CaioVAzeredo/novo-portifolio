import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLessenceComponent } from './pagina-lessence.component';

describe('PaginaLessenceComponent', () => {
  let component: PaginaLessenceComponent;
  let fixture: ComponentFixture<PaginaLessenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaLessenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaLessenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
