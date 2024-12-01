import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    "title": "Kana API",
    "description": "This is the Kana API Documents.",
    "themeConfig": {
    // https://vitepress.dev/reference/default-theme-config
        "nav": [
            { "text": "Home", "link": "/" }
        ],

        "sidebar": [
            {
                "text": "Home",
                "link": "/"
            },
            {
                "text": "API",
                "items": [
                    {
                        "text": "Chat",
                        "items": [
                            { "text": "Chat API", "link": "/api/chat/" },
                            { "text": "Character Settings", "link": "/api/chat/character/" }
                        ]
                    },
                    {
                        "text": "Voice",
                        "items": [
                            { "text": "Voice API", "link": "/api/voice/" }
                        ]
                    }
                ]
            }
        ]
    }
});
