import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicfooddataComponent } from './basicfooddata.component';

describe('BasicfooddataComponent', () => {
  let component: BasicfooddataComponent;
  let fixture: ComponentFixture<BasicfooddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicfooddataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicfooddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
