import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdataComponent } from './subdata.component';

describe('SubdataComponent', () => {
  let component: SubdataComponent;
  let fixture: ComponentFixture<SubdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
