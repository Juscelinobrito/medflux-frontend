import { ClinicSettings } from "../types/ClinicSettings";
import { UserPermission } from "../types/UserPermission";

export async function getClinicSettings(): Promise<ClinicSettings | null> {
  return null;
}

export async function updateClinicSettings(data: ClinicSettings): Promise<void> {
  console.log("Updating clinic settings", data);
}

export async function getUsersPermissions(): Promise<UserPermission[]> {
  return [];
}