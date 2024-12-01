import { defineConfig } from "vitepress";


export default defineConfig({
    "title": "Kana API",
    "description": "This is the Kana API Documents.",
    "lang": "ja",
    "base": "/docs/",
    "lastUpdated": true,
    "sitemap": {
        "hostname": "https://Kana-OpenSource.github.io/docs/"
    },
    "themeConfig": {
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
