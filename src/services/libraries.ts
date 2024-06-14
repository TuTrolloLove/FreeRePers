type APILibraries = {
    name: string;
    url_photo: string;
    alt: string;
    link: string;
};

export const getLibraries = async (): Promise<APILibraries[]> => {

    const librariesData: APILibraries[] = [{
        "name": "useHooks",
        "url_photo": "https://lh3.googleusercontent.com/d/1OfDVw7CnW2INlxW2t26A1Pn-R8ubDmiR",
        "alt": "useHooks Web Image",
        "link": "https://usehooks.com"
    },
    {
        "name": "react-magic-motion",
        "url_photo": "https://lh3.googleusercontent.com/d/15j_Yp84zovede8xIotL9tUhTrWzIot7G",
        "alt": "react-magic-motion Web Image",
        "link": "https://www.react-magic-motion.com"
    },
    {
        "name": "next-video",
        "url_photo": "https://lh3.googleusercontent.com/d/1gZ3mISNrnagfoet4-cIqtqebNrnIwloD",
        "alt": "next-video Web Image",
        "link": "https://next-video.dev"
    },
    {
        "name": "Framer Motion",
        "url_photo": "https://lh3.googleusercontent.com/d/1XbfXgZqzIv4teELmtIoyTSgOqKd8ldhZ",
        "alt": "Framer Motion Web Image",
        "link": "https://www.framer.com"
    },
    {
        "name": "AutoAnimate",
        "url_photo": "https://lh3.googleusercontent.com/d/1mxT0nSrZ6I15I_a2w9eAZqW6RSOdvfpL",
        "alt": "AutoAnimate Web Image",
        "link": "https://auto-animate.formkit.com"
    },
    {
        "name": "react-spring",
        "url_photo": "https://lh3.googleusercontent.com/d/17tvAC62TAPSlPVSMXCQS2MJgROYNWNBl",
        "alt": "react-spring Web Image",
        "link": "https://react-spring.dev"
    },
    {
        "name": "lightGallery",
        "url_photo": "https://lh3.googleusercontent.com/d/10pq8U0d5yYNdLFgbHwkXY5sr-Z1EsZC0",
        "alt": "lightGallery Web Image",
        "link": "https://www.lightgalleryjs.com"
    },
    {
        "name": "Atropos JS",
        "url_photo": "https://lh3.googleusercontent.com/d/1wYluljtK9aeejxFkTQK2pbTyfx3MfLRp",
        "alt": "Atropos JS Web Image",
        "link": "https://atroposjs.com"
    },
    {
        "name": "Plyr",
        "url_photo": "https://lh3.googleusercontent.com/d/1fmgL_U0i6ZU9IMi7PY4r-mEujtR9fsnn",
        "alt": "Plyr Web Image",
        "link": "https://plyr.io"
    }
    ];
    return librariesData;
};