import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymediaComponent } from './mymedia.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MymediaComponent', () => {
  let component: MymediaComponent;
  let fixture: ComponentFixture<MymediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ],
      declarations: [ MymediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
