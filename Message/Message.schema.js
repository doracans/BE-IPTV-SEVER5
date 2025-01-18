export const Message = {
    Message: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            title: { type: 'string' },
            message: { type: 'string' },
            propertyId: { type: 'string' },
            startedAt: { type: 'string', format: 'date-time' },
            endedAt: { type: 'string', format: 'date-time' },
            isDeleted: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
            isRead: { type: 'boolean' },
        },
    },
};
export const Message1 = {
  Message1: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      title: { type: 'string' },
      message: { type: 'string' },
      propertyId: { type: 'string' },
      startedAt: { type: 'string', format: 'date-time' },
      endedAt: { type: 'string', format: 'date-time' },
      isDeleted: { type: 'boolean' },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },
};