export const Product = {
    Product: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            benefit: {
                type: 'array',
                items: { type: 'string' },
            },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
export const Product1 = {
    Product1: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            value: { type: 'string' },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
export const Product2 = {
    Product2: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            benefit: {
                type: 'array',
                items: { type: 'string' },
            },
            isActive: { type: 'boolean' },
            deletedAt: { type: ['null'] },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};