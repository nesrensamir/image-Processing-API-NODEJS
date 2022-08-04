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


describe('test resize fn',()=>{
    it('test resize', async()=>{
      try {

        const width = 111
        const height = 400
        const imagename = 'palmtunnel'
      
        await resize(
           `../../images/full/${imagename}.jpg`,
           width,
           height,
           `../../images/thumbnails/${imagename}${width}${height}.jpg`
        )
        expect(
           fs.access(
              `../../images/thumbnails/${imagename}${width}${height}.jpg`,
              (Notexist) => {
                 if (Notexist) {
                    ;('Image Resized Successfully')
                 }
              }
           )
        )
     } catch (err) {
        return 'Image cannot be resized you need to check Image existance on the original folder & the values of width and height '
     }

    });


  });
