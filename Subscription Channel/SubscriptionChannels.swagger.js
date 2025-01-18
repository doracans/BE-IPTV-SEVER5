export default {
  '/subscription-channels': {
    get: {
      tags: ['Subscription Channels'],
      summary: 'Get all subscription channels',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'limit',
          in: 'query',
          description: 'Number of subscription channels to retrieve per page',
          required: false,
          schema: {
            type: 'integer',
            example: 2,
          },
        },
      ],
      responses: {
        200: {
          description: 'List of subscription channels',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'object',
                    properties: {
                      totalPages: { type: 'integer' },
                      totalData: { type: 'integer' },
                      currentPage: { type: 'integer' },
                      list: {
                        type: 'array',
                        items: {
                          $ref: '#/components/SubsChannelSchema/SubscriptionChannels',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
    post: {
      tags: ['Subscription Channels'],
      summary: 'Add a new subscription channels',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                dynamicChannels: {
                  type: 'array',
                  items: { type: 'string' },
                },
                dynamicChannelsLimit: { type: 'number' },
                staticChannels: {
                  type: 'array',
                  items: { type: 'string' },
                },
                staticChannelsLimit: { type: 'number' },
                isActive: { type: 'boolean' },
              },
              required: [
                'name',
                'description',
                'dynamicChannels',
                'dynamicChannelsLimit',
                'staticChannels',
                'staticChannelsLimit',
                'isActive',
              ],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    $ref: '#/components/SubsChannelSchema/SubscriptionChannels2',
                  },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
  },
  '/subscription-channels/list-active': {
    get: {
      tags: ['Subscription Channels'],
      summary: 'Get active subscription channels',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'isActive',
          in: 'query',
          description: 'Filter subscription channels by active status',
          required: false,
          schema: { type: 'boolean' },
        },
        {
          name: 'page',
          in: 'query',
          description: 'Page number for pagination',
          required: false,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        200: {
          description: 'List of active subscription channels',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/SubsChannelSchema/SubscriptionChannels',
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
  },
  '/subscription-channels/{id}': {
    get: {
      tags: ['Subscription Channels'],
      summary: 'Get subscription channels by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Subscription channels ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Subscription channels details',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    $ref: '#/components/SubsChannelSchema/SubscriptionChannels2',
                  },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
    put: {
      tags: ['Subscription Channels'],
      summary: 'Update subscription channels by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Subscription Channels ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                dynamicChannels: {
                  type: 'array',
                  items: { type: 'string' },
                },
                dynamicChannelsLimit: { type: 'number' },
                staticChannels: {
                  type: 'array',
                  items: { type: 'string' },
                },
                staticChannelsLimit: { type: 'number' },
                isActive: { type: 'boolean' },
              },
              required: [
                'name',
                'description',
                'dynamicChannels',
                'dynamicChannelsLimit',
                'staticChannels',
                'staticChannelsLimit',
                'isActive',
              ],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Subscription Channels updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/SubsChannelSchema/SubscriptionChannels2',
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
    delete: {
      tags: ['Subscription Channels'],
      summary: 'Delete subscription channels by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Subscription Channels ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Subscription Channels Deleted successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/SubsChannelSchema/SubscriptionChannels2',
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
  },
};
