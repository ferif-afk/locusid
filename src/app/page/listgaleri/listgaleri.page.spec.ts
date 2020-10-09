import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListGaleriPage } from './listgaleri.page';

describe('ListGaleriPage', () => {
  let component: ListGaleriPage;
  let fixture: ComponentFixture<ListGaleriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListGaleriPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListGaleriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
