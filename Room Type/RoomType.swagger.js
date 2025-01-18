export default {
  '/room-type': {
    get: {
      tags: ['Room Type'],
      summary: 'Get all Room Type',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'limit',
          in: 'query',
          description: 'Number of room types to retrieve per page',
          required: false,
          schema: {
            type: 'integer',
            example: 2,
          },
        },
        {
          name: 'page',
          in: 'query',
          description: 'The page number to retrieve',
          required: false,
          schema: {
            type: 'integer',
            example: 1,
          },
        },
        {
          name: 'propertyId',
          in: 'query',
          description: 'Filter by property ID',
          required: false,
          schema: {
            type: 'string',
            example: '67452ad59cd64ebad8a01405',
          },
        },
        {
          name: 'search',
          in: 'query',
          description: 'Search by room type name or other criteria',
          required: false,
          schema: {
            type: 'string',
            example: 'SAI',
          },
        },
      ],
      responses: {
        200: {
          description: 'List of room type',
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
                          $ref: '#/components/RoomTypeSchema/RoomType',
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
      tags: ['Room Type'],
      summary: 'Add a new room type',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                propertyId: { type: 'string' },
                isActive: { type: 'boolean' },
              },
              required: ['propertyId', 'name', 'isActive'],
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
                  data: { $ref: '#/components/RoomTypeSchema/RoomType4' },
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
  'room-type/list-active': {
    get: {
      tags: ['Room Type'],
      summary: 'Get active Room Type',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'propertyId',
          in: 'query',
          description: 'Filter by property ID',
          required: false,
          schema: {
            type: 'string',
            example: '67452ad59cd64ebad8a01405',
          },
        },
      ],
      responses: {
        200: {
          description: 'List of active room type',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/RoomTypeSchema/RoomType1',
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
  '/room-type/dash': {
    get: {
      tags: ['Room Type'],
      summary: 'Get list by property',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'search',
          in: 'query',
          description: 'Search by room type name or other criteria',
          required: false,
          schema: {
            type: 'string',
          },
        },
        {
          name: 'limit',
          in: 'query',
          description: 'Number of room types to retrieve per page',
          required: false,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: {
        200: {
          description: 'list by property',
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
                          $ref: '#/components/RoomTypeSchema/RoomType2',
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
  },
  '/room-type/{id}': {
    get: {
      tags: ['Room Type'],
      summary: 'Get room type by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Room Type ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Room type details',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/RoomTypeSchema/RoomType4' },
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
      tags: ['Room Type'],
      summary: 'Update room type by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Room Type ID',
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
                propertyId: { type: 'string' },
                isActive: { type: 'boolean' },
              },
              required: ['propertyId', 'name', 'isActive'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Room Type updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/RoomTypeSchema/RoomType4',
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
      tags: ['Room Type'],
      summary: 'Delete room type by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Room Type ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Room Type Deleted successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/RoomTypeSchema/RoomType3',
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
