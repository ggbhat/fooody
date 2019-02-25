import { TestBed,async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FoodyService } from './foody-service.service';

describe('FoodyService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: FoodyService = TestBed.get(FoodyService);
    expect(service).toBeTruthy();
  });

  it('get food list', () => {
    const service: FoodyService = TestBed.get(FoodyService);
    

    expect(service.getFoods().subscribe(
      (food) => {
        expect(food[0].id).toBe(1);
        
      }));
});
});
