import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeMakeComponent } from './meme-make.component';

describe('MemeMakeComponent', () => {
  let component: MemeMakeComponent;
  let fixture: ComponentFixture<MemeMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeMakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemeMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
