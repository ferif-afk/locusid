import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailartikelPage } from './detailartikel.page';

describe('DetailartikelPage', () => {
  let component: DetailartikelPage;
  let fixture: ComponentFixture<DetailartikelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailartikelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailartikelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
