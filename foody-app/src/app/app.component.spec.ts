import { TestBed, async ,inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppMaterialModule } from './material/app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FoodyListComponent } from './components/foody-list/foody-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { RatingRandomizerComponent } from './components/rating-randomizer/rating-randomizer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppMaterialModule,
        HttpClientTestingModule,
        
      ],
      declarations: [
        AppComponent,
        FoodyListComponent,
        RatingComponent,RatingRandomizerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'foody-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('foody');
  });

 
});
