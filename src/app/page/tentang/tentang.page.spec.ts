import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TentangPage } from './tentang.page';

describe('TentangPage', () => {
  let component: TentangPage;
  let fixture: ComponentFixture<TentangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TentangPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TentangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
