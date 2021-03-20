import * as Permissions from 'expo-permissions';


export function usePermission(permissionType: Permissions.PermissionType | Permissions.PermissionType[], ask: boolean = false, get: boolean = false) {
    const [permission, askPermission, getPermission] = Permissions.usePermissions(permissionType, { ask, get });
    return { permission, askPermission, getPermission }
}
