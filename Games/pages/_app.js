import { useEffect } from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';


const Games = ({ Component }) => {
    return(
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>Games</title>
            <htmlAttributes lang="ko" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover" />
            <meta name="description" content="테스트용 게임 프로젝트" />
            <meta name="og:title" content="NUTEE" />
            <meta name="og:description" content="Games : 여러 간단한 게임 페이지" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="../public/favicon.ico" />
            <link rel="icon" type="image/png" href="favicon.ico" />
        </Head>
        <Component />
    </>);
};

Games.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default Games;