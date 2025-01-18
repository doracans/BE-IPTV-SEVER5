
export const Feature = {
    Feature: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            iconUrl: { type: 'string' },
            url: { type: 'string' },
            type: { type: 'string' },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};
export const Feature2 = {
    Feature2: {
        type: 'object',
        properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            iconUrl: { type: 'string' },
            url: { type: 'string' },
            type: { type: 'string' },
            isActive: { type: 'boolean' },
            DeleteAt: { type: 'null' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
        },
    },
};