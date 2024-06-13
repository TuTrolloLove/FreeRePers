type APILibraries = {
    name: string;
    url_photo: string;
    link: string;
};

export const getLibraries = async (): Promise<APILibraries[]> => {

    const librariesData: APILibraries[] = [{
        "name": "useHooks",
        "url_photo": "src/images/libraries/useHooks.png",
        "link": "https://usehooks.com"
    },
    {
        "name": "react-magic-motion",
        "url_photo": "src/images/libraries/react_magic_motion.png",
        "link": "https://www.react-magic-motion.com"
    },
    {
        "name": "next-video",
        "url_photo": "src/images/libraries/next_video.png",
        "link": "https://next-video.dev"
    },
    {
        "name": "Framer Motion",
        "url_photo": "src/images/libraries/framer_motion.png",
        "link": "https://www.framer.com"
    },
    {
        "name": "AutoAnimate",
        "url_photo": "src/images/libraries/autoanimate.png",
        "link": "https://auto-animate.formkit.com"
    },
    {
        "name": "react-spring",
        "url_photo": "src/images/libraries/react-spring.png",
        "link": "https://react-spring.dev"
    },
    {
        "name": "lightGallery",
        "url_photo": "src/images/libraries/lightGallery.png",
        "link": "https://www.lightgalleryjs.com"
    },
    {
        "name": "Atropos JS",
        "url_photo": "src/images/libraries/atroposjs.png",
        "link": "https://atroposjs.com"
    },
    {
        "name": "Plyr",
        "url_photo": "src/images/libraries/plyr.png",
        "link": "https://plyr.io"
    }
    ];
    return librariesData;
};