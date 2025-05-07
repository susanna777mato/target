import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurComponent } from './structur.component';

describe('StructurComponent', () => {
  let component: StructurComponent;
  let fixture: ComponentFixture<StructurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructurComponent]
    });
    fixture = TestBed.createComponent(StructurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
