import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailGaleriPage } from './detailgaleri.page';

describe('DetailGaleriPage', () => {
  let component: DetailGaleriPage;
  let fixture: ComponentFixture<DetailGaleriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailGaleriPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailGaleriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
