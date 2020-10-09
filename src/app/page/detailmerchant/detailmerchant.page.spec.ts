import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailmerchantPage } from './detailmerchant.page';

describe('DetailmerchantPage', () => {
  let component: DetailmerchantPage;
  let fixture: ComponentFixture<DetailmerchantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmerchantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailmerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
