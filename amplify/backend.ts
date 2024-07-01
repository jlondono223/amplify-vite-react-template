import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
// import { data } from './data/resource';
import { appointmentReviewData } from './data/review';

defineBackend({
  auth,
  // data,
  appointmentReviewData,
});
