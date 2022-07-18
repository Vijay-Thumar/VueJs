export default function (context) {
  if (context.$cookies.get("jwt") == null) {
    context.store.commit("setIsAuth", false);
  } else {
    context.store.commit("setIsAuth", true);
  }
}
