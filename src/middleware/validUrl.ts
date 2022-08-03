import express from 'express' ;
import fs from 'fs';
import path from 'path';
import resize from './resize'

const logger = async (
    req: express.Request, 
    res: express.Response, 

) => {
     if (
        req.query.filename === undefined ||
        req.query.width === undefined ||
        req.query.height === undefined
    ) {
        res.send(
            `Error: Please enter valid URL parameters`
        ); 
         return;
     }  
    const rFileName = req.query.filename as string;
    const rWidth = parseInt(req.query.width as string);
    const rHeight = parseInt(req.query.height as string);
     if (isNaN(rWidth) || isNaN(rHeight)) {
        res.send(`Error: Please enter valid number for width and height`);
        return;
    }
    
     const srcFilePath: string = path.join(
        __dirname + '../../../images/full/' + rFileName +'.jpg' 
    ); 
    
    
    const dstFileName: string =
        rFileName + rWidth + rHeight + '.jpg';
    const dstDir: string = path.join(__dirname + '../../../images/thumbnails/');
    const dstFilePath: string = dstDir + dstFileName;
    
        try {
            fs.accessSync(srcFilePath, fs.constants.F_OK);
            console.log(`Requested file presents in full dir`);
        } catch (err) {
            res.send(`Error: Requested file is not present in full dir`);
            return;
        }
    
    
    
        try {
            fs.accessSync(dstFilePath, fs.constants.F_OK);
            res.sendFile(dstFilePath);
            return;
        } catch (err) {
            console.log(`No resized file found`);
        }
    
    //create thumbnail dir 
      try {
            fs.accessSync(dstDir, fs.constants.F_OK);
            console.log(`Thumbnail dir found`);
        } catch (err) {
            try {
                fs.mkdirSync(dstDir);
            } catch (err) {
                res.send(`Error: Failed to create dir`);
                return;
            }
        }
   //call resize fn  
    
    await resize(srcFilePath, rWidth, rHeight, dstFilePath);
    res.sendFile(dstFilePath)
}; 

export default logger ; 

