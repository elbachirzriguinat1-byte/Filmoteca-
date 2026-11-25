import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmsHijoComponent } from './films-hijo-component';

describe('FilmsHijoComponent', () => {
  let component: FilmsHijoComponent;
  let fixture: ComponentFixture<FilmsHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsHijoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsHijoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
