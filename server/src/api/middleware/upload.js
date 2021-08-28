
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import multer from 'multer';
import config from '../../config';

const s3 = new AWS.S3({
  accessKeyId: config.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_S3_SECRET_ACCESS_KEY,
})



const storage = multerS3({
  s3: s3,
  bucket: config.AWS_S3_BUCKET_NAME,
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    cb(null, Date.now().toString() + '_' + (file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
      cb(null, true)
  }else{
      cb(new Error('이미지파일만 업로드 가능합니다.'), false)
  }
};


export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000000 },
}).single('image');

