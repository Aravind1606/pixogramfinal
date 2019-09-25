import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleMediaUploadComponent } from './multiple-media-upload.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MultipleMediaUploadComponent', () => {
  let component: MultipleMediaUploadComponent;
  let fixture: ComponentFixture<MultipleMediaUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ MultipleMediaUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleMediaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
