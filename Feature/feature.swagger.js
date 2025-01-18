export default {
  '/feature': {
    get: {
      tags: ['Feature'],
      summary: 'Get all features',
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
          name: 'type',
          in: 'query',
          required: false,
          description: 'Value must be Web or TV',
          schema: { type: 'string', enum: ['Web', 'TV'] },
        },
        {
          name: 'page',
          in: 'query',
          required: false,
          description: 'Page number',
          schema: { type: 'integer' },
        },
      ],
      responses: {
        200: {
          description: 'List of features',
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
                        items: { $ref: '#/components/FeatureSchema/Feature' },
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
      tags: ['Feature'],
      summary: 'Add a new feature',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                iconUrl: { type: 'string' },
                url: { type: 'string' },
                type: { type: 'string' },
                isActive: { type: 'boolean' },
              },
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
                    type: 'array',
                    items: { $ref: '#/components/FeatureSchema/Feature2' },
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
  '/feature/list-active': {
    get: {
      tags: ['Feature'],
      summary: 'Get active features',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'isActive',
          in: 'query',
          description: 'Filter features by active status',
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
          description: 'List of active features',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Feature' },
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
  '/feature/{id}': {
    get: {
      tags: ['Feature'],
      summary: 'Get feature by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Feature ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Feature details',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: { $ref: '#/components/FeatureSchema/Feature2' },
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
      tags: ['Feature'],
      summary: 'Update feature by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Feature ID',
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
                iconUrl: { type: 'string' },
                url: { type: 'string' },
                type: { type: 'string' },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Feature updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: { $ref: '#/components/FeatureSchema/Feature2' },
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
      tags: ['Feature'],
      summary: 'Delete feature by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Feature ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Feature Deleted successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: { $ref: '#/components/FeatureSchema/Feature2' },
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
