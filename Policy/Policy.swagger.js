export default {
  'property-db/policy': {
    get: {
      tags: ['Policy'],
      summary: 'Get all Policy',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'page',
          in: 'query',
          description: 'Page number for pagination',
          required: false,
          schema: { type: 'integer', example: 1 },
        },
        {
          name: 'limit',
          in: 'query',
          required: false,
          description: 'Maximum number of items per page',
          schema: { type: 'integer', example: 10 },
        },
        {
          name: 'flated',
          in: 'query',
          description: 'Flated data',
          required: false,
          schema: { type: 'boolean', example: true },
        },
        {
          name: 'isActive',
          in: 'query',
          description: 'Filter content apps by active status',
          required: false,
          schema: { type: 'boolean', example: true },
        },
      ],
      responses: {
        200: {
          description: 'List of Policy',
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
                          $ref: '#/components/PolicySchema/Policy',
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
      tags: ['Policy'],
      summary: 'Add a new policy',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                description: { type: 'string' },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
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
  'property-db/policy/isActive/{id}': {
    put: {
      tags: ['Policy'],
      summary: 'Update policy isActive by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Policy ID',
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
  'property-db/policy/{id}': {
    put: {
      tags: ['Policy'],
      summary: 'Update policy by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Policy ID',
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
                title: { type: 'string' },
                description: { type: 'string' },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Policy updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/PolicySchema/Policy' },
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
      tags: ['Policy'],
      summary: 'Get policy by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Policy ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Get Policy by ID',
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
                          $ref: '#/components/PolicySchema/Policy',
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
      tags: ['Policy'],
      summary: 'Delete policy by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Policy ID',
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