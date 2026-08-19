"use strict";
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
console.log("Super Admin:", canEdit(UserRole.SuperAdmin));
console.log("Moderator:", canEdit(UserRole.Moderator));
console.log("Viewer:", canEdit(UserRole.Viewer));
if (typeof document !== "undefined") {
    const button = document.querySelector("button");
    button.disabled = true;
}
