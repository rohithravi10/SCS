/*************************************************
 * Medbot Microservices - Articles
 * constant.ts
 * Created by Maniratnam on 26/03/2024
 * Copyright
 *************************************************/

// enum
// common
enum SERVER_TYPE {
  local = "local",
  dev = "development",
  stage = "stage",
  prod = "production",
}

enum ROLE {
  patient = "patient",
  nonSubscribedPatient = "nonSubscribedPatient",
  doctor = "doctor",
  hospital = "hospital",
  clinic = "clinic",
  privateClinic = "privateClinic",
  lab = "lab",
  pharmacy = "pharmacy",
}

enum DATE_FORMAT {
  format1 = "YYYY-MM-DD HH:mm:ss",
  format2 = "YYYY-MM-DD",
  format3 = "MMM DD, YYYY",
  format4 = "h:mm A",
  format5 = "dddd",
}

// profile
enum PROFILE_STATUS {
  all = 0,
  accountCreated = 1,
  profileCompleted = 2,
  profileVerified = 3,
}

enum GENDER {
  M = "Male",
  F = "Female",
  O = "Other",
}

enum BLOOG_GROUP {
  A_P = "A+",
  A_N = "A-",
  B_P = "B+",
  B_N = "B-",
  AB_P = "AB+",
  AB_N = "AB-",
  O_P = "O+",
  O_N = "O-",
  A1B_P = "A1B+",
  A1B_N = "A1B-",
}

enum RELATIONSHIP {
  father = "Father",
  mother = "Mother",
  spouce = "Spouce",
  son = "Son",
  daughter = "Daughter",
}

// message
enum MESSAGE_CATEGORY {
  sms = "SMS",
  email = "EMAIL",
  notification = "NOTIFICATION",
}

enum NOTIFICATION_TYPE {
  all = 0,
  appointment = 1,
  buy = 2,
  track = 3,
  order = 4,
}

// appointment
enum APPOINTMENT_TYPE {
  all = 0,
  inClinic = 1,
  video = 2,
}

enum APPOINTMENT_STATUS {
  all = 0,
  upcoming = 1,
  completed = 2,
  canceled = 3,
}

enum APPOINTMENT_CANCEL_REASON {
  all = 0,
  reason1 = 1,
  reason2 = 2,
  reason3 = 3,
  reason4 = 4,
}

enum PRESCRIPTION_TIMINGS {
  M = "Morning",
  A = "Afternoon",
  E = "Evening",
  N = "Night",
}

enum DOSE_TYPE {
  ml = "ml",
  unit = "unit",
}

// const values
const APPOINTMENT_CANCEL_REASON_TEXT = [
  "This provider ask me to cancel",
  "Unexpected issues with transportation",
  "Temporary health concern that has resolved",
  "My reason is not listed",
];

const NOTIFICATION_TYPE_OPTION = [
  {
    id: 0,
    type: "All",
  },
  {
    id: 1,
    type: "Appointment",
  },
  {
    id: 2,
    type: "Buy",
  },
  {
    id: 3,
    type: "Track",
  },
];

// exports
export {
  SERVER_TYPE,
  ROLE,
  DATE_FORMAT,
  PROFILE_STATUS,
  GENDER,
  BLOOG_GROUP,
  RELATIONSHIP,
  MESSAGE_CATEGORY,
  NOTIFICATION_TYPE,
  APPOINTMENT_TYPE,
  APPOINTMENT_STATUS,
  APPOINTMENT_CANCEL_REASON,
  PRESCRIPTION_TIMINGS,
  DOSE_TYPE,
  APPOINTMENT_CANCEL_REASON_TEXT,
  NOTIFICATION_TYPE_OPTION,
};
