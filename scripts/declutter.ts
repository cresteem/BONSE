export default (htmlContent: string) => {
  const parser = new DOMParser();
  const serializer = new XMLSerializer();

  const parsedDoc = parser.parseFromString(htmlContent, "text/html");

  //remove unwanted elems
  const unwantedTagTypes: string[] = [
    "svg",
    "img",
    "picture",
    "video",
    "audio",
    "iframe",
    "embed",
    "script",
    "noscript",
    "style",
    "link",
  ];

  unwantedTagTypes.forEach((unwantedTagType: string) => {
    parsedDoc
      .querySelectorAll(unwantedTagType)
      .forEach((element) => element.remove());
  });

  //serialize back to string
  const cleanHTML: string = serializer.serializeToString(parsedDoc);

  return cleanHTML;
};
