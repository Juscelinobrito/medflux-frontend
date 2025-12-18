export type UserRole = "ADMIN" | "PROFESSIONAL" | "RECEPTION";

export interface UserPermission {
  userId: string;
  role: UserRole;
  active: boolean;
}