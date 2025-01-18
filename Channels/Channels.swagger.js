export default {
  channel: {
    get: {
      tags: ['Channels'],
      summary: 'Get all Channels',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'limit',
          in: 'query',
          required: false,
          description: 'Maximum number of items per page',
          schema: { type: 'integer' },
        },
        {
          name: 'flated',
          in: 'query',
          description: 'change nested response to flated response',
          required: false,
          schema: { type: 'boolean', example: true },
        },
        {
          name: 'select',
          in: 'query',
          required: false,
          schema: { type: 'string' },
        },
        {
          name: 'isActiveUrl',
          in: 'query',
          required: false,
          schema: { type: 'string' },
        },
        {
          name: 'name',
          in: 'query',
          description: 'search by name',
          required: false,
          schema: { type: 'string', example: 'BTV' },
        },
        {
          name: 'categories',
          in: 'query',
          description: 'filter by categories id',
          required: false,
          schema: { type: 'string', example: '65362816f8c127145a737c9e' },
        },
        {
          name: 'sort[categories.name]',
          in: 'query',
          description:
            'Sort by categories ID name (e.g., ascending or descending)',
          required: false,
          schema: { type: 'string', example: 'asc' },
        },
        {
          name: 'page',
          in: 'query',
          description: 'Page number for pagination',
          required: false,
          schema: { type: 'integer', example: 1 },
        },
      ],
      responses: {
        200: {
          description: 'List of Channels',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/ChannelsSchema/Channels' },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        401: {
          $ref: '#/components/ResponseSchemas/Unauthorized',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        404: {
          $ref: '#/components/ResponseSchemas/NotFound',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
    post: {
      tags: ['Channels'],
      summary: 'Add a new Channels',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                categories: { type: 'string' },
                url: {
                  type: 'array',
                  items: { type: 'string' },
                },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Channels added successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/ChannelsSchema/Channels1' },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        401: {
          $ref: '#/components/ResponseSchemas/Unauthorized',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        404: {
          $ref: '#/components/ResponseSchemas/NotFound',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
  },
  'property/channels/{id}': {
    get: {
      tags: ['Channels'],
      summary: 'Get Channels by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Channels ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Channels Detail',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/ChannelsSchema/Channels' },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        401: {
          $ref: '#/components/ResponseSchemas/Unauthorized',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        404: {
          $ref: '#/components/ResponseSchemas/NotFound',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
  },
  'channel/isActive/{id}': {
    put: {
      tags: ['Channels'],
      summary: 'Update Channels isActive by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Channels ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          $ref: '#/components/ResponseSchemas/Success',
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        401: {
          $ref: '#/components/ResponseSchemas/Unauthorized',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        404: {
          $ref: '#/components/ResponseSchemas/NotFound',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
  },
  'channel/{id}': {
    put: {
      tags: ['Channels'],
      summary: 'Update Channels by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Channels ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                categories: { type: 'string' },
                url: {
                  type: 'array',
                  items: { type: 'string' },
                },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Application updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/ChannelsSchema/Channels1' },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        401: {
          $ref: '#/components/ResponseSchemas/Unauthorized',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        404: {
          $ref: '#/components/ResponseSchemas/NotFound',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
    delete: {
      tags: ['Channels'],
      summary: 'Delete Channels by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Channels ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          $ref: '#/components/ResponseSchemas/Success',
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        401: {
          $ref: '#/components/ResponseSchemas/Unauthorized',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        404: {
          $ref: '#/components/ResponseSchemas/NotFound',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
  },
  'property/channels/{id}': {
    get: {
      tags: ['Channels'],
      summary: 'Get Channels by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Channels ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Channels Details',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/ChannelsSchema/Channels' },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/ResponseSchemas/BadRequest',
        },
        401: {
          $ref: '#/components/ResponseSchemas/Unauthorized',
        },
        403: {
          $ref: '#/components/ResponseSchemas/Forbidden',
        },
        404: {
          $ref: '#/components/ResponseSchemas/NotFound',
        },
        500: {
          $ref: '#/components/ResponseSchemas/Errorserver',
        },
      },
    },
  },
};
