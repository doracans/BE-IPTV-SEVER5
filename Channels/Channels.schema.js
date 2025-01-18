export const Channels = {
  Channels: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      name: { type: 'string' },
      categories_Id :{type:'string'},
      categoriesName: { type: 'string' },
      categoriesIsActive: { type: 'boolean' },
      categoriesIsDeleted: { type: 'boolean' },
      categoriesDeletedAt: { type: null },
      categoriesCreatedAt: { type: 'string', format: 'date-time' },
      categoriesUpdatedAt: { type: 'string', format: 'date-time' },
      categories__V: { type: 'integer' },
      url: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      isActive: { type: 'boolean' },
      isDeleted: { type: 'boolean' },
      deletedAt: { type: null },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },
};

export const Channels1 = {
  Channels1: {
    type: 'object',
    properties: {
      _id : {type: 'sring'},
      name: { type: 'string' },
      categories: { type: 'string' },
      url: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      isActive: { type: 'boolean' },
      isDeleted: { type: 'boolean' },
      deletedAt:{type: null },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },
};