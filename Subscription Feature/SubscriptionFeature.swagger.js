export default {
  '/subscription-feature': {
    get: {
      tags: ['Subscription Feature'],
      summary: 'Get all subscription features',
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: 'List of subscription features',
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
                          $ref: '#/components/SubsFeatureSchema/SubscriptionFeature',
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
    post: {
      tags: ['Subscription Feature'],
      summary: 'Add a new subscription feature',
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
                  data: {
                    $ref: '#/components/SubsFeatureSchema/SubscriptionFeature2',
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
  '/subscription-feature/list-active': {
    get: {
      tags: ['Subscription Feature'],
      summary: 'Get active subscription features',
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
                    items: {
                      $ref: '#/components/SubsFeatureSchema/SubscriptionFeature',
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
  '/subscription-feature/{id}': {
    get: {
      tags: ['Subscription Feature'],
      summary: 'Get subscription feature by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Subscription feature ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Subscription Feature details',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    $ref: '#/components/SubsFeatureSchema/SubscriptionFeature1',
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
    put: {
      tags: ['Subscription Feature'],
      summary: 'Update Subscription Feature by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Subscription Feature ID',
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
                      $ref: '#/components/SubsFeatureSchema/SubscriptionFeature2',
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
      tags: ['Subscription Feature'],
      summary: 'Delete Subscription Feature by ID',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'Subscription Feature ID',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Subscription Feature Deleted successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'success' },
                  data: {
                    type: 'array',
                    items: {
                      $ref: '#/components/SubsFeatureSchema/SubscriptionFeature2',
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
  },
};
