import featureDocs from './Feature/feature.swagger.js';
import { Forbidden, BadRequest, ErrorServer, Success, Unauthorized, NotFound } from './components.swagger.js';
import { AppLauncher, AppLauncher2 } from './ContentApp/Schema.contentApp.js';
import { Product,Product1,Product2 } from './Product/Schema.product.js';
import { Feature, Feature2 } from './Feature/Schema.feature.js';
import { RoomType, RoomType1, RoomType2, RoomType3, RoomType4 } from './Room Type/Schema.roomtype.js'
import { SubscriptionChannels, SubscriptionChannels2 } from './Subscription Channel/Schema.subsChannel.js';
import { SubscriptionFeature, SubscriptionFeature1, SubscriptionFeature2 } from './Subscription Feature/Schema.subsFeature.js';
import { Application } from './Aplication/Application.schema.js';
import { Policy } from './Policy/Policy.schema.js';
import {Message,Message1} from './Message/Message.schema.js';
import { Channels,Channels1 } from './Channels/Channels.schema.js';
import ContentDocs from './ContentApp/ContentAppLauncher.swagger.js'
import SubscriptionFeatureDocs from './Subscription Feature/SubscriptionFeature.swagger.js';
import SubscriptionChannelsDocs from './Subscription Channel/SubscriptionChannels.swagger.js';
import RoomTypeDocs from './Room Type/RoomType.swagger.js';
import productDocs from './Product/product.swagger.js';
import RoleDocs from './Role/role.swagger.js';
import PolicyDocs from './Policy/Policy.swagger.js';
import MessageDocs from './Message/Message.swagger.js';
import ApplicationDocs from './Aplication/Application.swagger.js';
import ChannelsDocs from './Channels/Channels.swagger.js';




export default {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'API documentation for IPTV',
  },
  servers: [
    {
      url: 'http://localhost:8002/api/v1',
      description: 'Main API server',
    },
  ],
  paths: {
    ...featureDocs,
    ...ContentDocs,
    ...RoleDocs,
    ...SubscriptionFeatureDocs,
    ...SubscriptionChannelsDocs,
    ...RoomTypeDocs,
    ...productDocs,
    ...PolicyDocs,
    ...MessageDocs,
    ...ApplicationDocs,
    ...ChannelsDocs
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    FeatureSchema: {
      ...Feature,
      ...Feature2,
    },
    ContentAppSchemas: {
      ...AppLauncher,
      ...AppLauncher2,
    },
    ProductSchema: {
      ...Product,...Product1,...Product2,
    },
    RoomTypeSchema: {
      ...RoomType,
      ...RoomType1,
      ...RoomType2,
      ...RoomType3,
      ...RoomType4,
    },
    SubsFeatureSchema: {
      ...SubscriptionFeature,
      ...SubscriptionFeature1,
      ...SubscriptionFeature2,
    },
    SubsChannelSchema: {
      ...SubscriptionChannels,
      ...SubscriptionChannels2,
    },
  PolicySchema: {
      ...Policy,
    },
  MessageSchema: {
    ...Message,
    ...Message1,
    },
    ChannelsSchema: {
    ...Channels,
    ...Channels1,
    },
    ApplicationSchema: {
    ...Application
    },
    ResponseSchemas: {
      ...Forbidden,
      ...BadRequest,
      ...ErrorServer, 
      ...Success,
      ...Unauthorized,
      ...NotFound,
  
      Role: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          name: { type: 'string' },
          privileges: { type: 'array', items: { type: 'string' } },
          featTv: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                iconUrl: { type: 'string' },
                url: { type: 'string' },
                type: { type: 'string' },
                isActive: { type: 'boolean' },
                deleteAt: { type: 'boolean' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
              },
            },
          },
          featDashboard: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                iconUrl: { type: 'string' },
                url: { type: 'string' },
                type: { type: 'string' },
                isActive: { type: 'boolean' },
                deleteAt: { type: 'boolean' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
              },
            },
          },
          isActive: { type: 'boolean' },
          createdAt: { type: 'string' },
          updatedAt: { type: 'string' },
        },
      },
      Role1: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          name: { type: 'string' },
          isActive: { type: 'boolean' },
          privileges: { type: 'array', items: { type: 'string' } },
          featTV: { type: 'array', items: { type: 'string' } },
          featDashboard: { type: 'array', items: { type: 'string' } },
          isDeleted: { type: 'boolean' },
          deletedAt: { type: 'null' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },
      Role2: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          name: { type: 'string' },
          isActive: { type: 'boolean' },
          featTv: {
            type: 'array',
            items: { type: 'string' },
          },
          featDashboard: {
            type: 'array',
          },
          deletedAt: { type: 'null' },
          isDeleted: { type: 'boolean' },
          privileges: { type: 'aray' },
          updatedAt: { type: 'string' },
        },
      },
    },
    response: {},
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  api: ['./*.js'],
};