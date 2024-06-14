type APIIcons = {
    name: string;
    url_photo: string;
    alt: string;
    link: string;
};

export const getIcons = async (): Promise<APIIcons[]> => {

    const iconsData: APIIcons[] = [
        {
            name: "Google Icons",
            url_photo: "https://lh3.googleusercontent.com/d/1xG_okYdhB43v8JB2kyQ0iqZFUjQnGUYM=s1980?authuser=1980",
            alt: "Google Icons Web Image",
            link: "https://fonts.google.com/icons"
        },
        {
            name: "Iconify",
            url_photo: "https://lh3.googleusercontent.com/d/1DEh0-feyYEST_RaIVUrW7c6_DjRWYkvX",
            alt: "Iconify Web Image",
            link: "https://icon-sets.iconify.design"
        },
        {
            name: "Lucide",
            url_photo: "https://lh3.googleusercontent.com/d/12nrW1o3VehuZhfD_zIj_UqgtuejVkbPR",
            alt: "Lucide Web Image",
            link: "https://lucide.dev/icons/"
        },
        {
            name: "Tabler Icons",
            url_photo: "https://lh3.googleusercontent.com/d/1L_kh_Nr0yiRJ2d0O71RSbY_2UveGpHml",
            alt: "Tabler Icons Web Image",
            link: "https://tabler.io/icons"
        },
        {
            name: "SVG Repo",
            url_photo: "https://lh3.googleusercontent.com/d/1yUyX0v-vQm9jOIGN2VXnPG-RpAbhUMnP",
            alt: "SVG Repo Web Image",
            link: "https://www.svgrepo.com/collections/"
        },
        {
            name: "Reshot",
            url_photo: "https://lh3.googleusercontent.com/d/1Tf3WxR-3wGJpg3_dHDbZm8fuCQg8chP7",
            alt: "Reshot Web Image",
            link: "https://www.reshot.com/free-svg-icons/"
        },
        {
            name: "Animated Icons",
            url_photo: "https://lh3.googleusercontent.com/d/12u2GcWJfxRj0N9EbDrq-uXpQomGlxkde",
            alt: "Animated Icons Web Image",
            link: "https://animatedicons.co/icons/minimalistic"
        },
        {
            name: "Line Icons",
            url_photo: "https://lh3.googleusercontent.com/d/1PvjkjXvb8Fupf8nDbCkv8a3TSq2ELr29",
            alt: "Line Icons Web Image",
            link: "https://lineicons.com/free-icons"
        },
        {
            name: "Hero Icons",
            url_photo: "https://lh3.googleusercontent.com/d/1kyYJQQBrZB54HD9cbqZa5nj9C_ltEYHx",
            alt: "Hero Icons Web Image",
            link: "https://heroicons.com"
        }
    ];
    return iconsData;
};
