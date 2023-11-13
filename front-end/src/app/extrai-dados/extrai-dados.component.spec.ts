import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraiDadosComponent } from './extrai-dados.component';

describe('ExtraiDadosComponent', () => {
  let component: ExtraiDadosComponent;
  let fixture: ComponentFixture<ExtraiDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraiDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraiDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
