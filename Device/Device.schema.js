export const Device = {
  Device: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      name: { type: 'string' },
      deviceId: { type: 'string' },
      roomId: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          roomNumber: { type: 'string' },
          propertyId: { type: 'string' },
          wifi: {
            type: 'object',
            properties: {
              ssid: { type: 'string' },
              type: { type: 'null' },
              password: { type: 'string' },
              userPass: { type: 'string' },
              username: { type: 'string' },
            },
          },
        },
      },
      wifiQR: { type: 'string' },
      isCheckOut: { type: 'boolen' },
      isActive: { type: 'boolean' },
      isDeleted: { type: 'boolean' },
      seletedAt: { type: 'null' },
      createdAt: { type: 'string' },
      updatedAt: { type: 'string' },
      image: { type: 'string' },
      packageChannelId: { type: 'string', format: 'date-time' },
      statusCheckout: { type: 'string', format: 'date-time' },
      greetingMessage: { type: 'string', format: 'date-time' },
      isNotifCheckout: { type: 'string', format: 'date-time' },
      isSechedule: { type: 'string', format: 'date-time' },
      checkIn: { type: 'string', format: 'date-time' },
      checkOut: { type: 'string', format: 'date-time' },
      guest: { type: 'string', format: 'date-time' },
      roomLogId:{ type: 'string', format: 'date-time' },
    },
  },
};
//  {
//                 "_id": "676cd381b483e4aae6a21d07",
//                 "name": "terserah",
//                 "deviceId": "1102523",
//                 "roomId": {
//                     "_id": "660ca4eb4dd6e62cd59f53f5",
//                     "roomNumber": "1001",
//                     "propertyId": "65b75d89bcdf2cb75a3f6a81",
//                     "wifi": {
//                         "ssid": "",
//                         "type": null,
//                         "password": "",
//                         "userPass": "password",
//                         "username": "hai hai"
//                     },
//                     "wifiQR": "http://media.nonton.id/development/65b75d89bcdf2cb75a3f6a81/property/ce8b7c6ad677731d878a27f2b41434548a0c808f3dc9dc88d347071cc71c.png",
//                     "isCheckOut": false,
//                     "isActive": true,
//                     "isDeleted": false,
//                     "deletedAt": null,
//                     "createdAt": "2024-04-02T02:31:08.805Z",
//                     "updatedAt": "2024-11-07T05:26:02.544Z",
//                     "__v": 0,
//                     "image": "http://media.nonton.id/development/65b75d89bcdf2cb75a3f6a81/manage-room/5d13c735ff1b346f86015d30750f076664a319815a8295940ab8d11d348a.jpeg",
//                     "packageChannelId": "661f30feb876cba111e74d29",
//                     "statusCheckout": "lateCheckout",
//                     "greetingMessage": "66d7d0c36464b5d1ff173435",
//                     "isNotifCheckout": false,
//                     "isSechedule": false,
//                     "checkIn": "2024-12-12T00:00:00.000Z",
//                     "checkOut": "2024-11-07T05:25:30.376Z",
//                     "guest": "Sebuah Rahasia ",
//                     "roomLogId": "672c4f44910fd95e100b9592"
//                 },
//                 "propertyId": "65b75d89bcdf2cb75a3f6a81",
//                 "deviceType": "STB",
//                 "isTvOn": false,
//                 "isActive": true,
//                 "isDeleted": false,
//                 "createdAt": "2024-12-26T04:03:20.570Z",
//                 "updatedAt": "2024-12-26T04:03:20.570Z",
//                 "__v": 0
//             },
