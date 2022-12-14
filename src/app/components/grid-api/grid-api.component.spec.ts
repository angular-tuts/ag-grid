import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridApiComponent } from './grid-api.component';

describe('GridApiComponent', () => {
  let component: GridApiComponent;
  let fixture: ComponentFixture<GridApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
