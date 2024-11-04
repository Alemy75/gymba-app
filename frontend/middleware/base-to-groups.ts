export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/") {
    return navigateTo("/groups");
  }

  return navigateTo(to.path);
});
