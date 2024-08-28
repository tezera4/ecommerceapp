import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebProductComponent } from './web-product.component';

describe('WebProductComponent', () => {
  let component: WebProductComponent;
  let fixture: ComponentFixture<WebProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
