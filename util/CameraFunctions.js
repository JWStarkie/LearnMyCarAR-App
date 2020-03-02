'use strict';

async function takePictureMake(navigation, camera) {
  console.log('takePictureMake');
  if (camera) {
    await camera
      .takePictureAsync({
        quality: 0.9,
        base64: true,
      })
      .then(data => {
        console.log(data.uri);
        navigation.navigate('UploadProcessing', {
          dataPass: data.base64,
          mode: 'Make',
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

async function takePictureModel(navigation, vehicleMake, camera) {
  console.log('takePictureModel');
  if (camera) {
    await camera
      .takePictureAsync({
        quality: 0.9,
        base64: true,
      })
      .then(data => {
        console.log(data.uri);
        navigation.navigate('UploadProcessing', {
          dataPass: data.base64,
          vehicleMake: vehicleMake,
          mode: 'Model',
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default {
  takePictureMake,
  takePictureModel,
};
