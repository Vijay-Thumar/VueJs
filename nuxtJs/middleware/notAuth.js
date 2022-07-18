import Cookies from "js-cookie";
export default function (context) {
  if (Cookies.get("jwt")) {
    context.redirect("/gallery");
  }
}

