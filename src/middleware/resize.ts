import sharp from 'sharp';

const resize = async (
    srcFilePath: string,
    rWidth: number,
    rHeight: number,
    dstFilePath: string
) => {
    console.log('resize fn')
    await sharp(srcFilePath)
        .resize(rWidth, rHeight)
        .toFormat('jpg')
        .toFile(dstFilePath);
};

export default resize;