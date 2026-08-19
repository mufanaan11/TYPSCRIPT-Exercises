enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

console.log("Super Admin:", canEdit(UserRole.SuperAdmin));
console.log("Moderator:", canEdit(UserRole.Moderator));
console.log("Viewer:", canEdit(UserRole.Viewer));

if (typeof document !== "undefined") {
  const button = document.querySelector("button") as HTMLButtonElement;
  button.disabled = true;
}
