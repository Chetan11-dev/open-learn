module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#007bff',
                'gray-soft': '#383e48',
                'white-soft': '#eaecf2',
            },
            textColor: {
                gray: '#495157',
            },
            backgroundColor: {
                'green': '#13aa52',
                'navy-blue': '#161724',
            },
            borderWidth: {
                6: '6px',
            },
            boxShadow: {
                primary: '0px 0px 0px 2px #007bff',
            },
            zIndex: {
                2: '2',
            },
            width: {
                '82': '328px',
                '85': '340px',
                '105': '420px', // must match
                'preview-mobile': '420px', // must match

                'preview-tablet': '768px',

                'side-panel': '360px',
            },
            height: {
                'side-panel': 'calc(100vh - 48px)',
            },

            maxWidth: {
                'side-panel': '360px',
                '180': '45rem',
            },
            minWidth: {
                '8': '32px',
                'side-panel': '360px',
            },
            minHeight: {
                8: '32px',
                50: '200px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
}
