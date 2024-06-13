
export const getIcons = async (): Promise<APIIcons[]> => {

    const iconsData: APIIcons[] = [
        {
            name: "Google Icons",
            url_photo: "src/images/icons/google_icons.png",
            link: "https://fonts.google.com/icons"
        },
        {
            name: "Iconify",
            url_photo: "src/images/icons/iconify.png",
            link: "https://icon-sets.iconify.design"
        },
        {
            name: "Lucide",
            url_photo: "src/images/icons/lucide.png",
            link: "https://lucide.dev/icons/"
        },
        {
            name: "Tabler Icons",
            url_photo: "src/images/icons/tabler.png",
            link: "https://tabler.io/icons"
        },
        {
            name: "SVG Repo",
            url_photo: "src/images/icons/svgrepo.png",
            link: "https://www.svgrepo.com/collections/"
        },
        {
            name: "Reshot",
            url_photo: "src/images/icons/reshot.png",
            link: "https://www.reshot.com/free-svg-icons/"
        },
        {
            name: "Animated Icons",
            url_photo: "src/images/icons/animatedicons.png",
            link: "https://animatedicons.co/icons/minimalistic"
        },
        {
            name: "Line Icons",
            url_photo: "src/images/icons/lineicons.png",
            link: "https://lineicons.com/free-icons"
        },
        {
            name: "Hero Icons",
            url_photo: "src/images/icons/heroicons.png",
            link: "https://heroicons.com"
        }
    ];
    return iconsData;
};
