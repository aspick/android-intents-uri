interface AndroidIntentsURIParams {
  scheme: string;
  host: string;
  path: string;
  packageName: string;
}

const AndroidIntentsURI = (params: AndroidIntentsURIParams) => {
  const { host, path, packageName, scheme } = params;
  return `intent://${host}/${path}#Intent;package=${packageName};scheme=${scheme};end;`;
};

export default AndroidIntentsURI;
