import { z } from 'zod';
const strongPassword = z.string().min(8,'Password must be at least 8 characters').regex(/[A-Z]/,'Password needs an uppercase letter').regex(/[a-z]/,'Password needs a lowercase letter').regex(/[0-9]/,'Password needs a number').regex(/[^A-Za-z0-9]/,'Password needs a special character');
export const loginSchema = z.object({ email:z.string().trim().min(1,'Email is required').email('Enter a valid email'), password:strongPassword });
export const inviteSchema = z.object({ fullName:z.string().trim().min(3,'Full name must be at least 3 characters'), workEmail:z.string().trim().email('Enter a valid work email'), role:z.enum(['member','manager','admin']), departmentTags:z.string().trim().min(2,'Add a department tag'), sendInviteEmail:z.boolean().default(false) });
