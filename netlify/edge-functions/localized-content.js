export default async (request, context) => {
  const translations = {
    UNKNOWN: "Hello!",
    US: "Howdy y'all!",
    GB: "How do you do?",
    AU: "G'day, mate!",
  };

  const countryCode = context.geo?.country?.code;
  const translation = translations[countryCode] || translations["UNKNOWN"];
  const countryName = context.geo?.country?.name || "somewhere in the world";

  return new Response(`Your personalized greeting for ${countryName} is: ${translation}`, {
    headers: { "content-type": "text/html" },
  });
};

export const config = {
  path: "/localized-content",
};