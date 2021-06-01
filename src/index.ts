const AndroidIntentsURI = (
  schema: string,
  host: string,
  path: string,
  packageName: string
) => {
  return `intent://${host}/${path}#Intent;package=${packageName};scheme=${schema};end;`;
};

export default AndroidIntentsURI;
