import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemePostComponent } from './meme-post.component';

describe('MemePostComponent', () => {
  let component: MemePostComponent;
  let fixture: ComponentFixture<MemePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
