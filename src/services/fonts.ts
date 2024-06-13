type APIFonts = {
    name: string;
    url_photo: string;
    link: string;
};

export const getFonts = async (): Promise<APIFonts[]> => {

    const fontsData: APIFonts[] = [{
        "name": "Google Fonts",
        "url_photo": "src/images/fonts/google_fonts.png",
        "link": "https://fonts.google.com"
    },
    {
        "name": "Awwwards",
        "url_photo": "src/images/fonts/awwwards.png",
        "link": "https://www.awwwards.com/awwwards/collections/free-fonts/"
    },
    {
        "name": "Font Squirrel",
        "url_photo": "src/images/fonts/font_squirrel.png",
        "link": "https://www.fontsquirrel.com"
    },
    {
        "name": "Font Space",
        "url_photo": "src/images/fonts/font_space.png",
        "link": "https://www.fontspace.com"
    },
    {
        "name": "1001 fonts",
        "url_photo": "src/images/fonts/1001_fonts.png",
        "link": "https://www.1001fonts.com/"
    },
    {
        "name": "Font Fabric",
        "url_photo": "src/images/fonts/fontfabric.png",
        "link": "https://www.fontfabric.com/free-fonts/"
    },
    {
        "name": "Online Web Fonts",
        "url_photo": "src/images/fonts/onlinewebfonts.png",
        "link": "https://www.onlinewebfonts.com/fonts"
    },
    {
        "name": "Beautiful Web Type",
        "url_photo": "src/images/fonts/beautifulwebtype.png",
        "link": "https://beautifulwebtype.com"
    },
    {
        "name": "Font Source",
        "url_photo": "src/images/fonts/fontsource.png",
        "link": "https://fontsource.org"
    }
    ];
    return fontsData;
};