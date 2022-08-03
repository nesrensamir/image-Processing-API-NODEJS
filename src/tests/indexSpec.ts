import supertest from 'supertest' 
import app from '../index';


const request = supertest(app);


  
  describe('test the endpoints ', () => {
    it('test /api', async () => {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
   
    });
   
    it('test /api/images', async () => {
      const response = await request.get(
        '/api/images?width=100&height=100&filename=fjord'
      );
      expect(response.status).toBe(200);
      
    });
  });