import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCreateTemplateComponent } from './article-create-template.component';

describe('ArticleCreateTemplateComponent', () => {
  let component: ArticleCreateTemplateComponent;
  let fixture: ComponentFixture<ArticleCreateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCreateTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
