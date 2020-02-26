'use strict';

import {
  TRAINING_API_KEY,
  PREDICTION_API_KEY,
  END_POINT,
  PROJECT_ID,
  ITERATION_ID,
  IMGUR_CLIENT_ID,
} from 'react-native-dotenv';

// import Toast from "react-native-simple-toast";
// import NavigationService from "./NavigationService";

const url =
  END_POINT + '/customvision/v3.0/training/projects/' + PROJECT_ID + '/tags';
const key = TRAINING_API_KEY;
const predi_url =
  END_POINT +
  'customvision/v3.0/prediction/' +
  PROJECT_ID +
  '/classify/iterations/' +
  ITERATION_ID +
  '/url';
const pred_key = PREDICTION_API_KEY;
const imgur_upload_url = 'https://api.imgur.com/3/upload';

async function handleAzure(imageData, navigation) {
  let response1 = await predictVehicleMakeWithImageFile(imageData);
  console.log(response1.data.link);
  let response2 = await azurePrediction(response1.data.link);
  console.log(response2);
  navigation.navigate('MakePredictionResults', {
    imageUrl: response1.data.link,
    prediction: response2.predictions[0].tagName,
  });
}

// upload image file to imgur host for azure prediction
function predictVehicleMakeWithImageFile(imageData) {
  // Toast.show("Image Processing, Please Wait!", Toast.LONG);
  return (
    fetch(imgur_upload_url, {
      method: 'POST',
      headers: {
        Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
      },
      body: imageData,
    })
      .then(response => {
        return response.json();
      })
      // .then(responseJson => {
      //   const imageUrlResponse = responseJson.data.link;
      //   Toast.show("Image Processed, Getting Vehicle Prediction!", Toast.LONG);
      //   const response = azurePrediction(responseJson.data.link).then(data => {
      //     console.log("image url " + imageUrlResponse);
      //     console.log("prediction response " + response);
      //   });
      //   // return { url2: imageUrlResponse, pred: predictResponse };
      // })
      .catch(error => {
        console.error(error);
      })
  );
}

// call prediction API to predict vehicle model
function azurePrediction(imageUrl) {
  // Toast.show("Image Processed, Getting Vehicle Prediction!", Toast.LONG);
  return (
    fetch(predi_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Prediction-Key': pred_key,
      },
      body: JSON.stringify({ Url: imageUrl }),
    })
      .then(response => {
        return response.json();
      })
      // .then(responseJson => {
      //   console.log(responseJson.predictions[0].tagName);
      //   /* let i;
      //   for (i in responseJson.predictions) {
      //     if (responseJson.predictions[i].probability > 0.9) {
      //       console.log(
      //         responseJson.predictions[i].probability * 100 +
      //           "% chance it's a " +
      //           responseJson.predictions[i].tagName
      //       );
      //       NavigationService.navigate("AR", {
      //         probability: responseJson.predictions[i].probability * 100,
      //         classification: responseJson.predictions[i].tagName
      //       });
      //     } else {
      //       NavigationService.navigate("AR");
      //     }
      //   } */
      //   // const predictResponse = responseJson.predictions[0].tagName;
      //   // return predictResponse;
      // })
      .catch(error => {
        console.error(error);
      })
  );
}

// get image tags
function getImageTags() {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Training-Key': key,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      uploadImageForTraining(responseJson[0].id, responseJson[1].id);
    })
    .catch(error => {
      console.error(error);
    });
}

function uploadImageForTraining(ford_tag, vw_tag) {
  console.log('Ford: ' + ford_tag + ' VW: ' + vw_tag);
}

// add other navigation functions that you need and export them

export default {
  handleAzure,
  predictVehicleMakeWithImageFile,
  azurePrediction,
  getImageTags,
  uploadImageForTraining,
};
