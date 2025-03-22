export function useAuth() {
  const user = { name: "Admin", role: "admin" };
  return { user, isAdmin: user.role === "admin" };
}
