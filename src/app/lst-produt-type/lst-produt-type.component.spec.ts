import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstProdutTypeComponent } from './lst-produt-type.component';

describe('LstProdutTypeComponent', () => {
  let component: LstProdutTypeComponent;
  let fixture: ComponentFixture<LstProdutTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstProdutTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstProdutTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
