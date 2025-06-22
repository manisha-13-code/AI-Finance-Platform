import { z } from 'zod';

export const accountSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    type: z.enum(['CURRENT', 'SAVINGS']),
    balance: z.string().min(1, 'Balance cannot be negative'),
    isDefault: z.boolean().default(false)
    });