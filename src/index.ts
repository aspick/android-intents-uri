const AndroidIntentsURI = (
  scheme: string,
  host: string,
  path: string,
  packageName: string
) => {
  return `intent://${host}/${path}#Intent;package=${packageName};scheme=${scheme};end;`;
};

export default AndroidIntentsURI;
