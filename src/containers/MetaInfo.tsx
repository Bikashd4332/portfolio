import Head from 'next/head';

export function MetaInfo() {
    return (
        <Head>
            <title>Bikash Das</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
            />
            <meta property="og:title" content="Biaksh Das" />
            <meta property="og:url" content="https://portfolio-bikashd4332.vercel.app" />
            <meta property="og:type" content="profile" />
            <meta
                property="og:image"
                content="https://portfolio-bikashd4332.vercel.app/favicon.svg"
            />
            <meta
                name="description"
                content="Bikash Das is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
            ></meta>
        </Head>
    );
}
