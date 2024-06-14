type APIFonts = {
    name: string;
    url_photo: string;
    alt: string;
    link: string;
};

export const getFonts = async (): Promise<APIFonts[]> => {

    const fontsData: APIFonts[] = [{
        "name": "Google Fonts",
        "url_photo": "https://lh3.googleusercontent.com/d/1LOZtpHTH1wTzJnwaVDVjycDC63_ZZfHK",
        "alt": "Google Fonts Web Image",
        "link": "https://fonts.google.com"
    },
    {
        "name": "Awwwards",
        "url_photo": "https://lh3.googleusercontent.com/d/1fqVLSdZ1Ko0yE-899sYvGuUhTSQnP1DO",
        "alt": "Awwwards Web Image",
        "link": "https://www.awwwards.com/awwwards/collections/free-fonts/"
    },
    {
        "name": "Font Squirrel",
        "url_photo": "https://lh3.googleusercontent.com/d/1Gkm22l4cqJRwet5eUYNBQOTLULL1ZRaI",
        "alt": "Font Squirrel Web Image",
        "link": "https://www.fontsquirrel.com"
    },
    {
        "name": "Font Space",
        "url_photo": "https://lh3.googleusercontent.com/d/1ZYiyNse_r4RwoKerF9ncADDK8ca8uyqP",
        "alt": "Font Space Web Image",
        "link": "https://www.fontspace.com"
    },
    {
        "name": "1001 fonts",
        "url_photo": "https://lh3.googleusercontent.com/d/1R7bR2riIbnDYGSry8YYd_00wzcq5wc-E",
        "alt": "1001 fonts Web Image",
        "link": "https://www.1001fonts.com/"
    },
    {
        "name": "Font Fabric",
        "url_photo": "https://lh3.googleusercontent.com/d/1hx0i2ZAx-Q5W7TdU_1ljs1FxHUyOFkaU",
        "alt": "Font Fabric Web Image",
        "link": "https://www.fontfabric.com/free-fonts/"
    },
    {
        "name": "Online Web Fonts",
        "url_photo": "https://lh3.googleusercontent.com/d/1W4vKhiO0dUVjeglICiG9GkV8uENrgi6x",
        "alt": "Online Web Fonts Web Image",
        "link": "https://www.onlinewebfonts.com/fonts"
    },
    {
        "name": "Beautiful Web Type",
        "url_photo": "https://lh3.googleusercontent.com/d/1uiMr2DWs-qCVsKGP2-Xv5ZoDL744UOVi",
        "alt": "Beautiful Web Type Web Image",
        "link": "https://beautifulwebtype.com"
    },
    {
        "name": "Font Source",
        "url_photo": "https://lh3.googleusercontent.com/d/1f260w4_BxXox6ll-kmu6tUZ0CKXtf5NJ",
        "alt": "Font Source Web Image",
        "link": "https://fontsource.org"
    }
    ];
    return fontsData;
};