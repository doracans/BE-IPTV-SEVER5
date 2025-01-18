export const Forbidden = {
  Forbidden: {
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
};
export const BadRequest = {
  BadRequest: {
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
};
export const ErrorServer = {
  Errorserver: {
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
};
export const NotFound = {
  NotFound: {
    description: 'Data Not Found',
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
};
export const Unauthorized = {
  Unauthorized: {
    description: 'Unauthorized',
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
};
export const Success = {
  Success: {
    description: 'Success',
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
}

