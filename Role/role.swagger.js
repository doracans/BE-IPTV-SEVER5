export default {
  '/master-role': {
    get: {
      tags: ['Role'],
      summary: 'Get all role',
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: 'List of role',
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
                          $ref: '#/components/schemas/Role',
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
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        403: {
          description: 'Forbidden',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
  'role': {
    get: {
      tags: ['Role'],
      summary: 'Get active role',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'isActive',
          in: 'query',
          description: 'Filter subscription feature by active status',
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
          description: 'List of active subscription features',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/SubscriptionFeature' },
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        403: {
          description: 'Forbidden',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
     post: {
      tags: ['Role'],
      summary: 'Add a new role',
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
                featTv: {
                  type: 'array',
                  items: { type: 'string' },
                },
                featDashboard: {
                  type: 'array',
                  items: { type: 'string' },
                },
                isActive: { type: 'boolean' },
              },
              required: [
                'name',
                'description',
                'featTv',
                'featDashboard',
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
                  data: { $ref: '#/components/schemas/Role1' },
                },
              },
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        403: {
          description: 'Forbidden',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
  '/role/{id}': {
    get: {
      tags: ['Role'],
      summary: 'Get role by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Role ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Role details',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: { $ref: '#/components/schemas/Role2' },
                },
              },
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        403: {
          description: 'Forbidden',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
    put: {
      tags: ['Role'],
      summary: 'Update role by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Role ID',
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
                featTv: {
                  type: 'array',
                  items: { type: 'string' },
                },
                featDashboard: {
                  type: 'array',
                  items: { type: 'string' },
                },
                isActive: { type: 'boolean' },
              },
              required: [
                'name',
                'description',
                'featTv',
                'featDashboard',
                'isActive',
              ],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Subscription Feature updated successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/SubscriptionFeature2',
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        403: {
          description: 'Forbidden',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ['Role'],
      summary: 'Delete role by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Role ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Role Deleted successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        403: {
          description: 'Forbidden',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: { type: 'string' },
                  message: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
};
