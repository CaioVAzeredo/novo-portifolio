import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhoComponent } from './trabalho.component';

describe('TrabalhoComponent', () => {
  let component: TrabalhoComponent;
  let fixture: ComponentFixture<TrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabalhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
