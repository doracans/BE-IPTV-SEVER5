export const Policy = {
    Policy: {
     type: 'object',
        properties: {
            _id: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
            propertyId: { type: 'string' },
            order: { type: 'number' },
            isActive: { type: 'boolean' },
            isDeleted: { type: 'boolean' },
            deleteAt: { type: 'null' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};

