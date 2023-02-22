const globalStyles = {
    global: () => ({
        html: {
            height: 'fill-available',
        },
        body: {
            bg: 'navyblue.600',
            width: '100%',
            minHeight: 'fill-available',
            overflowX: 'hidden',
            '-webkit-font-smoothing': 'antialiased',
            fontSize: { base: 'lg', md: 'xl' },
            lineHeight: '1.3',
            color: 'slate.700',
        },
        p: {
            color: 'slate.700',
            fontFamily: 'sans',
        },
        'h1, h2, h3, h4, h5, h6': {
            margin: '0px 0px 10px',
            fontWeight: '700',
        },
        'ol,ul': {
            listStyleType: 'none',
        },
        section: {
            margin: '0px auto',
            maxWidth: '1000px',
            padding: '100px 0px',
        },
    }),
};

export default globalStyles;
