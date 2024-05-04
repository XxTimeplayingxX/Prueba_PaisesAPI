import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRenderComponent } from './login-render.component';

describe('LoginRenderComponent', () => {
  let component: LoginRenderComponent;
  let fixture: ComponentFixture<LoginRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
