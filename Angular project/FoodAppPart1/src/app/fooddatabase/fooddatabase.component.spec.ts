import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddatabaseComponent } from './fooddatabase.component';

describe('FooddatabaseComponent', () => {
  let component: FooddatabaseComponent;
  let fixture: ComponentFixture<FooddatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooddatabaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooddatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
