import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../../material/app.material.module';
import { RatingRandomizerComponent } from './rating-randomizer.component';

describe('RatingRandomizerComponent', () => {
  let component: RatingRandomizerComponent;
  let fixture: ComponentFixture<RatingRandomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingRandomizerComponent ],
      imports:[AppMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
