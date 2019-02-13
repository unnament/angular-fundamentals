import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService;
  let mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {

    it('should filter sessions correctly', () => {
      component.sessions = <ISession[]>[{ id: 1, level: 'beginner'}, { id: 2, level: 'intermediate'}, { id: 3, level: 'intermediate'}];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
      expect(component.visibleSessions).toEqual(<ISession[]>[{ id: 2, level: 'intermediate'}, { id: 3, level: 'intermediate'}]);
    });

    it('should sort sessions correctly', () => {
      component.sessions = <ISession[]>[
        { id: 1, name: 'session 2', level: 'beginner'},
        { id: 2, name: 'session 3', level: 'intermediate'},
        { id: 3, name: 'session 1', level: 'intermediate'}
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(3);
      expect(component.visibleSessions[2].name).toBe('session 3');
    });

  });
});
