import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppMaterialModule } from '../../material/app.material.module';
import { FoodyListComponent } from './foody-list.component';
import { RatingComponent } from '../rating/rating.component';
import { RatingRandomizerComponent } from '../rating-randomizer/rating-randomizer.component';

describe('FoodyListComponent', () => {
  let component: FoodyListComponent;
  let fixture: ComponentFixture<FoodyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodyListComponent,RatingComponent,RatingRandomizerComponent],
      imports: [
        RouterTestingModule,
        AppMaterialModule,
        HttpClientTestingModule,
        
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
