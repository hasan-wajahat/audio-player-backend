/**
 * This file is not in use currently
 * because using static s3 links for 
 * audio files
 */
import AWS from 'aws-sdk';

const {
  AWSAccessKeyId,
  AWSSecretKey,
  AWSRegion,
  Bucket
} = process.env

AWS.config.update({
  accessKeyId:AWSAccessKeyId,
  secretAccessKey:AWSSecretKey,
  region: AWSRegion
})

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const createBucket = async = () => {
  await s3.tryCreateBucket(Bucket);
}

export {
  createBucket
}
