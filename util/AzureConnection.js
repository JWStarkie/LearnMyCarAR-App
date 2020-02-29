'use strict';

import {
  AUTH_API_KEY,
  END_POINT,
  PROJECT_ID,
  ITERATION_ID,
  IMGUR_CLIENT_ID,
  PROJECT_ID_2,
  ITERATION_ID_2,
} from 'react-native-dotenv';

const imgur_upload_url = 'https://api.imgur.com/3/upload';

const auth_key = AUTH_API_KEY;

const predi_url =
  END_POINT +
  'customvision/v3.0/prediction/' +
  PROJECT_ID +
  '/classify/iterations/' +
  ITERATION_ID +
  '/url';

async function handleAzure(imageData, navigation) {
  let response1 = await imgurImageUpload(imageData);
  console.log(response1.data.link);
  let response2 = await azurePrediction(response1.data.link, predi_url);
  console.log(response2);
  navigation.navigate('MakePredictionResults', {
    imageUrl: response1.data.link,
    prediction: response2.predictions[0].tagName,
  });
}

// upload image file to imgur host for azure prediction
function imgurImageUpload(imageData) {
  return fetch(imgur_upload_url, {
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
    },
    body: imageData,
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
}

// call prediction API to predict vehicle make
function azurePrediction(imageUrl, prediction_Url) {
  return fetch(prediction_Url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Prediction-Key': auth_key,
    },
    body: JSON.stringify({ Url: imageUrl }),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
}

const predi_url_VW =
  END_POINT +
  'customvision/v3.0/Prediction/' +
  PROJECT_ID_2 +
  '/classify/iterations/' +
  ITERATION_ID_2 +
  '/url';

async function handleAzureModels(imageData, vehicleMake, navigation) {
  if (vehicleMake === 'Ford') {
    /* Add in Ford stuff here */
    console.warn('Ford Model yet to be done, but at least this works!!');
  } else if (vehicleMake === 'Volkswagen') {
    let response1 = await imgurImageUpload(imageData);
    console.log(response1.data.link);
    console.log(predi_url_VW);
    let response2 = await azurePrediction(response1.data.link, predi_url_VW);
    console.log(response2);
    navigation.navigate('ModelPredictionResults', {
      imageUrl: response1.data.link,
      prediction: response2.predictions[0].tagName,
    });
  }
}

const url =
  END_POINT + '/customvision/v3.0/training/projects/' + PROJECT_ID + '/tags';

// get image tags - for upload to app-data.json - only used when updating this file
function getImageTags() {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Training-Key': auth_key,
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

function uploadImageForTrainingMake(tagKey, navigation) {
  console.log('uploadImageForTrainingMake');
  console.log('This key is = ' + tagKey);
}

function uploadImageForTrainingFordModel(tagKey, navigation) {
  console.log('uploadImageForTrainingFordModel');
  console.log('This key is = ' + tagKey);
}

function uploadImageForTrainingVwModel(tagKey, navigation) {
  console.log('uploadImageForTrainingVwModel');
  console.log('This key is = ' + tagKey);
}

export default {
  handleAzure,
  handleAzureModels,
  uploadImageForTrainingMake,
  uploadImageForTrainingFordModel,
  uploadImageForTrainingVwModel,
};
