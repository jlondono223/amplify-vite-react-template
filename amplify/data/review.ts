import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  AppointmentReview: a.model({
    name: a.string(),
    email: a.string(),
    date: a.date(),
    rating: a.float(),
    content: a.string(),
  }).authorization((allow) => [allow.owner()]),
});

export type AppointmentReviewSchema = ClientSchema<typeof schema>;

export const appointmentReviewData = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
