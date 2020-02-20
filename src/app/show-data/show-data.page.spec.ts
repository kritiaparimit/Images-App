import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowDataPage } from './show-data.page';

describe('ShowDataPage', () => {
  let component: ShowDataPage;
  let fixture: ComponentFixture<ShowDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
