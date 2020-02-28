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
        navigation.navigate('MakePredictionProcessing', {
          dataPass: data.base64,
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
        navigation.navigate('ModelPredictionProcessing', {
          dataPass: data.base64,
          vehicleMake: vehicleMake,
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
