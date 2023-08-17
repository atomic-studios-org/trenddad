export default defineNuxtRouteMiddleware(async (to, from) => {
    const { getSession } = useAuth()
    const session = await getSession()
    if (to.path.includes('sign-in') && session?.user?.email ) {
      return navigateTo('/')
    }
    else if (to.path.includes('sign-up') && session?.user?.email ) {
        return navigateTo('/')
      }
      else if (to.path.includes('confirm-email') && session?.user?.email ) {
        return navigateTo('/')
      }
  })