//import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicComponent } from './public.component';

describe('PublicComponent', () => {
  //let component: PublicComponent;
  let fixture: PublicComponent;
  //let fixture: ComponentFixture<PublicComponent>;

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [ PublicComponent ]
    // })
    // .compileComponents();

   // fixture = TestBed.createComponent(PublicComponent);
    //component = fixture.componentInstance;
  //  fixture.detectChanges();
    fixture =new PublicComponent();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
    expect(fixture.title).toEqual('FyzioApp')
  });
});
