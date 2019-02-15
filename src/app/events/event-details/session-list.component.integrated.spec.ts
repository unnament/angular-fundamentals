import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { By } from '@angular/platform-browser';
import { debug } from 'util';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../../shared/duration.pipe';
import { CollapsibleWellComponent } from '../../shared/collapsible-well.component';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

    beforeEach(async(() => {
      const mockAuthService = {
        isAuthenticated: () => true,
        currentUser: { userName: 'Joe' }
      };
      const mockVoterService = {
        userHasVoted: () => true
      };

      TestBed.configureTestingModule({
        imports: [],
        declarations: [
          SessionListComponent,
          // UpvoteComponent,
          DurationPipe,
          // CollapsibleWellComponent
        ],
        providers: [
          { provide: AuthService, useValue: mockAuthService },
          { provide: VoterService, useValue: mockVoterService }
        ],
        schemas: [
          NO_ERRORS_SCHEMA // DO NOT WORRY ON COMPONENTS THAT COMPILER DOESNT RECOGNIZE
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(SessionListComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      debugEl = fixture.debugElement;
    });

    describe('initial display', () => {

      it('should have the correct initial display data', () => {
        component.sessions = [
          { id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }
        ];
        component.filterBy = 'all';
        component.sortBy = 'name';
        component.eventId = 4;

        component.ngOnChanges();
        fixture.detectChanges();

        // expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
        expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');

      });

    });
});
