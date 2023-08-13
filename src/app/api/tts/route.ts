import cheerio from 'cheerio';
import AWS from 'aws-sdk';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body = await request.json();
  const { title, content } = body;

  const structure = `
  ${title}s
  ${content}
  `;
  try {
    const polly = new AWS.Polly({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      region: process.env.AWS_REGION!,
    });

    const params = {
      Text: structure,
      OutputFormat: 'mp3',
      VoiceId: 'Joanna',
    };

    const result = await polly.synthesizeSpeech(params).promise();

    const s3 = new AWS.S3();

    const s3_params = {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: `tts/${Date.now()}.mp3`,
      Body: result?.AudioStream,
      ContentType: result?.ContentType,
    };

    const s3Obj = await s3.upload(s3_params).promise();

    if (s3Obj.Key && s3Obj.Bucket) {
      const s3GetURLParams = {
        Bucket: s3Obj.Bucket,
        Key: s3Obj.Key,
        Expires: 60 * 60 * 24 * 30, // URL will be valid for 30 days
      };

      const url = await s3.getSignedUrlPromise('getObject', s3GetURLParams);

      console.log('Audio URL :', url)

      return NextResponse.json({ url });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error });
  }
};
