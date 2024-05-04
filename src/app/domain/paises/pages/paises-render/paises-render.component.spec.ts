import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesRenderComponent } from './paises-render.component';

describe('PaisesRenderComponent', () => {
  let component: PaisesRenderComponent;
  let fixture: ComponentFixture<PaisesRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisesRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisesRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
