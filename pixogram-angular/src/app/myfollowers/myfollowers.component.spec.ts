import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfollowersComponent } from './myfollowers.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyfollowersComponent', () => {
  let component: MyfollowersComponent;
  let fixture: ComponentFixture<MyfollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ MyfollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
