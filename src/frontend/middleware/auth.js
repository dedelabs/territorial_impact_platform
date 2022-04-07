export default function ({ redirect, $strapi }) {
  console.log($strapi.user)
  if (!$strapi.user) {
    return redirect('/login')
  }
}
