export default {
  'property-db/message': {
    get: {
      tags: ['Message'],
      summary: 'Get all Message',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'type',
          in: 'query',
          description: 'Filter by message type (e.g., private or public)',
          required: false,
          schema: { type: 'string', enum: ['private', 'public'] },
        },
        {
          name: 'page',
          in: 'query',
          description: 'Page number for pagination',
          required: false,
          schema: { type: 'integer', example: 1 },
        },
        {
          name: 'flated',
          in: 'query',
          description: 'change nested response to flated response',
          required: false,
          schema: { type: 'boolean', example: true },
        },
        {
          name: 'sort[roomId.name]',
          in: 'query',
          description: 'Sort by room ID name (e.g., ascending or descending)',
          required: false,
          schema: { type: 'string', example: 'asc' },
        },
        {
          name: 'start Date',
          in: 'query',
          description: 'Start date for filtering results (format: YYYY-MM-DD).',
          required: false,
          schema: { type: 'string', format: 'date', example: '2024/4/25' },
        },
        {
          name: 'end Date',
          in: 'query',
          description: 'End date for filtering results (format: YYYY-MM-DD)',
          required: false,
          schema: { type: 'string', format: 'date', example: '2024/5/25' },
        },
        {
          name: 'limit',
          in: 'query',
          required: false,
          description: 'Maximum number of items per page',
          schema: { type: 'integer', example: 10 },
        },
      ],
      responses: {
        200: {
          description: 'List of Message',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'object',
                    properties: {
                      list: {
                        type: 'array',
                        items: {
                          $ref: '#/components/MessageSchema/Message',
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
      tags: ['Message'],
      summary: 'Add a new Message',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data:': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' },
                title: { type: 'string' },
                startedAt: { type: 'string' },
                endedAt: { type: 'string' },
                image: { type: 'string', format: 'binary' },
                roomIds: { type: 'array', items: { type: 'string' } },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Message added successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/MessageSchema/Message1' },
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
  'property-db/message/read/{id}': {
    put: {
      tags: ['Message'],
      summary: 'Update message read by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Message ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data:': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' },
                title: { type: 'string' },
                startedAt: { type: 'string' },
                endedAt: { type: 'string' },
                roomIds:  { type: 'string' } ,
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Massage updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/MessageSchema/Message' },
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
  'property-db/message/{id}': {
    put: {
      tags: ['Message'],
      summary: 'Update message by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Message ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data:': {
            schema: {
              type: 'object',
              properties: {
                message: { type: 'string' },
                title: { type: 'string' },
                startedAt: { type: 'string' },
                endedAt: { type: 'string' },
                image: { type: 'string', format: 'binary' },
                roomIds: { type: 'array', items: { type: 'string' } },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Message updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/MessageSchema/Message' },
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
    get: {
      tags: ['Message'],
      summary: 'Get message by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Message ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Get message by ID',
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
                          $ref: '#/components/MessageSchema/Message1',
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
      tags: ['Message'],
      summary: 'Delete message by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Message ID',
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
};
