import '../scss/app.scss';
import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';

/* Your JS Code goes here */

/* Demo JS */
import './demo.js';



const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
  runtime: 'mediapipe', // or 'tfjs'
  modelType: 'full'
};
detector = await handPoseDetection.createDetector(model, detectorConfig);
