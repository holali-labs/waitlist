export const onRequest: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/ko") || url.pathname.startsWith("/en")) {
    return next();
  }

  const country = request.headers.get("CF-IPCountry");
  const locale = country === "KR" ? "ko" : "en";

  return Response.redirect(
    new URL(`/${locale}`, url.origin),
    302,
  );
};
