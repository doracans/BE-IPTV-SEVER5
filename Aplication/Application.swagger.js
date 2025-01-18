export default {
  'application': {
    get: {
      tags: ['Application'],
      summary: 'Get all Application',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'sort[roomId.name]',
          in: 'query',
          description: 'Sort by room ID name (e.g., ascending or descending)',
          required: false,
          schema: { type: 'string', example: 'asc' },
        },
      ],
      responses: {
        200: {
          description: 'List of Application',
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
                          $ref: '#/components/ApplicationSchema/Application',
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
      tags: ['Application'],
      summary: 'Add a new Application',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data:': {
            schema: {
              type: 'object',
              properties: {
                applicationId: { type: 'string' },
                name: { type: 'string' },
                icon: { type: 'string', format: 'binary' },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Application added successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/ApplicationSchema/Application' },
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
  'application/isActive/{id}': {
    put: {
      tags: ['Application'],
      summary: 'Update Application isActive by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Application ID',
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
  'application/{id}': {
    put: {
      tags: ['Application'],
      summary: 'Update Application by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Application ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      requestBody: {
        content: {
          'multipart/form-data:': {
            schema: {
              type: 'object',
              properties: {
                applicationId: { type: 'string' },
                name: { type: 'string' },
                icon: { type: 'string', format: 'binary' },
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
                  data: { $ref: '#/components/ApplicationSchema/Application' },
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
      tags: ['Application'],
      summary: 'Get Application by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Applicatoin ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Application Details',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/ApplicationSchema/Application' },
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
      tags: ['Application'],
      summary: 'Delete Application by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Application ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      requestBody: {
        content: {
          'multipart/form-data:': {
            schema: {
              type: 'object',
              properties: {
                versionCode: { type: 'string' },
                versionName: { type: 'string' },
                file: { type: 'string', format: 'binary' },
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
};