const Index = () => (<div>Next.js</div>);

Index.getInitialProps = async({ req }) => {
  console.log('req.headers.host', req.headers.host);
  return {};
}

export default Index;