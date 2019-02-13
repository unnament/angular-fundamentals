import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { of } from 'rxjs';

describe('VoterService', () => {
   let voterService: VoterService;
   let mockHttp;

   beforeEach(() => {
     mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
     voterService = new VoterService(mockHttp);
   });

   describe('deleteVoter', () => {

     it('should remove the voter from the list of voters', () => {
      const session = { id: 6, voters: ['fabian', 'ania'] };
      mockHttp.delete.and.returnValue(of(true));

      voterService.deleteVoter(3, <ISession>session, 'fabian');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('ania');
     });

     it('should call http.delete with the right URL', () => {
      const session = { id: 6, voters: ['fabian', 'ania'] };
      mockHttp.delete.and.returnValue(of(true));

      voterService.deleteVoter(3, <ISession>session, 'fabian');

      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/fabian');
     });

   });

   describe('addVoter', () => {

    it('should add the voter to the list of voters', () => {
      const session = { id: 6, voters: ['fabian'] };
      mockHttp.post.and.returnValue(of(true));

      voterService.addVoter(3, <ISession>session, 'ania');

      expect(session.voters.length).toBe(2);
      expect(session.voters).toEqual(['fabian', 'ania']);
     });

     it('should call http.add with the right URL', () => {
      const session = { id: 6, voters: ['fabian'] };
      mockHttp.post.and.returnValue(of(true));

      voterService.addVoter(3, <ISession>session, 'ania');

      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/ania', {}, jasmine.any(Object));
     });

   });
});
