'use strict';

async function takePictureMake(navigation, trainNewVehicle, camera) {
  console.log('takePictureMake');
  if (camera) {
    if (trainNewVehicle) {
      console.log('Train new vehicle');
      await camera
        .takePictureAsync({
          skipProcessing: true,
        })
        .then(data => {
          navigation.navigate('ImagePreview', {
            imageUri: data.uri,
            totrain: trainNewVehicle,
          });
        });
    } else if (!trainNewVehicle) {
      console.log('Predict Vehicle');
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
          // AzureConnection.handleAzure(data.base64).then(data => {
          //   console.log("we're here.");
          //   console.log(data);
          //   console.log('Now here..');
          //   NavigationService.navigate('ResultsPage', {
          //     imageUrl: data.response1,
          //     prediction: data.response2,
          //   });
          //   return data;
          // });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
async function takePictureModel(navigation) {
  console.log('takePictureModel');
  /*  this.setState({ processing: true });
    if (this.camera) {
      if (this.props.navigation.state.params.trainNewVehicle) {
        console.log("Train new vehicle");
        await this.camera
          .takePictureAsync({ skipProcessing: true })
          .then(data => {
            NavigationService.navigate("ImagePreview", {
              imageUri: data.uri,
              totrain: this.props.navigation.state.params.trainNewVehicle
            });
          });
      } else {
        console.log("Predict Vehicle");
        await this.camera
          .takePictureAsync({
            quality: 0.9,
            base64: true
          })
          .then(data => {
            // console.log(data);
            AzureConnection.predictVehicleMakeWithImageFile(data.base64);
            //             NavigationService.navigate("ImagePreview", {
            //   imageUri: data.uri,
            //   totrain: this.props.navigation.state.params.trainNewVehicle
            // });
          });
      }
    } */
}

export default {
  takePictureMake,
  takePictureModel,
};
