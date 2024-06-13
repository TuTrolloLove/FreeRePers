type APIIcons = {
    name: string;
    url_photo: string;
    link: string;
};

export const getIcons = async (): Promise<APIIcons[]> => {

    const iconsData: APIIcons[] = [
        {
            name: "Google Icons",
            url_photo: "https://lh3.googleusercontent.com/d/1xG_okYdhB43v8JB2kyQ0iqZFUjQnGUYM=s1980?authuser=1980",
            link: "https://fonts.google.com/icons"
        },
        {
            name: "Iconify",
            url_photo: "https://lh3.googleusercontent.com/d/1DEh0-feyYEST_RaIVUrW7c6_DjRWYkvX",
            link: "https://icon-sets.iconify.design"
        },
        {
            name: "Lucide",
            url_photo: "https://lh3.googleusercontent.com/d/12nrW1o3VehuZhfD_zIj_UqgtuejVkbPR",
            link: "https://lucide.dev/icons/"
        },
        {
            name: "Tabler Icons",
            url_photo: "https://lh3.googleusercontent.com/d/1L_kh_Nr0yiRJ2d0O71RSbY_2UveGpHml",
            link: "https://tabler.io/icons"
        },
        {
            name: "SVG Repo",
            url_photo: "https://lh3.googleusercontent.com/d/1yUyX0v-vQm9jOIGN2VXnPG-RpAbhUMnP",
            link: "https://www.svgrepo.com/collections/"
        },
        {
            name: "Reshot",
            url_photo: "https://lh3.googleusercontent.com/d/1Tf3WxR-3wGJpg3_dHDbZm8fuCQg8chP7",
            link: "https://www.reshot.com/free-svg-icons/"
        },
        {
            name: "Animated Icons",
            url_photo: "https://lh3.googleusercontent.com/d/12u2GcWJfxRj0N9EbDrq-uXpQomGlxkde",
            link: "https://animatedicons.co/icons/minimalistic"
        },
        {
            name: "Line Icons",
            url_photo: "https://lh3.googleusercontent.com/d/1PvjkjXvb8Fupf8nDbCkv8a3TSq2ELr29",
            link: "https://lineicons.com/free-icons"
        },
        {
            name: "Hero Icons",
            url_photo: "https://lh3.googleusercontent.com/d/1kyYJQQBrZB54HD9cbqZa5nj9C_ltEYHx",
            link: "https://heroicons.com"
        }
    ];
    return iconsData;
};
