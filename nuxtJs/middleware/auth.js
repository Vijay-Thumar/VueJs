export default function (context) {
  if (!context.$cookies.get('jwt')) {
    context.redirect("/login");
  }
}