import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailmemberPage } from './detailmember.page';

describe('DetailmemberPage', () => {
  let component: DetailmemberPage;
  let fixture: ComponentFixture<DetailmemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailmemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
