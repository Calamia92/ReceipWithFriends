import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecipeComponent } from './profile-recipe.component';

describe('ProfileRecipeComponent', () => {
  let component: ProfileRecipeComponent;
  let fixture: ComponentFixture<ProfileRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
