import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedAccountsComponent } from './blocked-accounts.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BlockedAccountsComponent', () => {
  let component: BlockedAccountsComponent;
  let fixture: ComponentFixture<BlockedAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ BlockedAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
