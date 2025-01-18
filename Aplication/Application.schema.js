export const Application = {
  Application: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      name: { type: 'string' },
      applicationId: { type: 'string' },
      icon: { type: 'string' },
      isActive: { type: 'boolean' },
      isDeleted: { type: 'boolean' },
      deletedAtd: { type: null },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },
};

