import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';

/**
 * server에서 페이지를 구성할 때 공통적으로 사용
 * client 로직은 동작하지 않음 (window 등...)
 * @param Component
 * // @param pageProps : getStaticProps, getStaticPaths, getServerSideProps을 사용하여 props를 받을 수 있음
 * @returns {JSX.Element}
 * @constructor
 */
const NodeBird = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>NodeBird</title>
    </Head>
    <Component />
  </>
);

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

/**
 * getInitialProps, getServerSideProps등에서 Redux Store 접근을 위하여
 * next-redux-wrapper를 사용해 App(여기에서는 NodeBird)을 감싸줌
 */
export default wrapper.withRedux(NodeBird);
