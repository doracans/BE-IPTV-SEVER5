export default {
  '/apps-launcher': {
    get: {
      tags: ['Content App Launcher'],
      summary: 'Get all content apps',
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: 'List of content apps',
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
                          $ref: '#/components/ContentAppSchemas/AppLauncher',
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
  '/apps-launcher/list-active': {
    get: {
      tags: ['Content App Launcher'],
      summary: 'Get active content apps',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'isActive',
          in: 'query',
          description: 'Filter content apps by active status',
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
          description: 'List of active content apps',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/ContentAppSchemas/AppLauncher',
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
  'apps-launcher': {
    post: {
      tags: ['Content App Launcher'],
      summary: 'Add a new content app',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data:': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                icon: { type: 'string', format: 'binary' },
                url: { type: 'string' },
                typeApp: { type: 'string' },
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
                  data: { $ref: '#/components/ContentAppSchemas/AppLauncher2' },
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
  '/apps-launcher/{id}': {
    get: {
      tags: ['Content App Launcher'],
      summary: 'Get content app by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Content App ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Content app details',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/ContentAppSchemas/AppLauncher2' },
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
      tags: ['Content App Launcher'],
      summary: 'Update Content App by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Content App ID',
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
                name: { type: 'string' },
                icon: { type: 'string', format: 'binary' },
                url: { type: 'string' },
                typeApp: { type: 'string' },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Content App updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/ContentAppSchemas/AppLauncher2',
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/schemas/BadRequest',
        },
        403: {
          $ref: '#/components/schemas/Forbidden',
        },
        500: {
          $ref: '#/components/schemas/Errorserver',
        },
      },
    },

    delete: {
      tags: ['Content App Launcher'],
      summary: 'Delete Content App by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Content App ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Content App Deleted successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/ContentAppSchemas/AppLauncher2',
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          $ref: '#/components/schemas/BadRequest',
        },
        403: {
          $ref: '#/components/schemas/Forbidden',
        },
        500: {
          $ref: '#/components/schemas/Errorserver',
        },
      },
    },
  },
};
