import express from 'express' 

import logger from '../../middleware/validUrl'

const images = express.Router();  

images.get('/',logger,(req: express.Request, res: express.Response)=>{
   console.log('logger');
   logger(req,res); 
 
}) ;

export default images;

