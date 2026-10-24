/* EDIT THIS FILE to manage the portfolio. No build step required.
   projects: add/remove/reorder projects. id must be unique and URL-friendly.
   categories: project membership; media.categories overrides individual gallery placement.
   media.homeOrder: number = show on home (lowest first); null = hide from home.
   media.layout: full | wide | narrow | portrait. Media array order = project page order.
   published: false hides a project from navigation, galleries, and its detail page.
   See README.md for examples. */
window.PORTFOLIO = {
  "site": {
    "name": "Rana Alghamdi",
    "email": "rna23.gh@gmail.com",
    "role": "Visual development & concept creation",
    "logo": "assets/brand/logo.png",
    "categories": [
      {
        "id": "characters",
        "title": "Character design"
      },
      {
        "id": "animation",
        "title": "Animation & animatics"
      },
      {
        "id": "illustration",
        "title": "Illustration"
      }
    ]
  },
  "projects": [
    {
      "id": "doppelganger",
      "title": "Doppelgänger",
      "subtitle": "Frame-by-frame animation & character design",
      "year": "2022 / 2024",
      "description": "Character design and hand-drawn animation from the Doppelgänger project.",
      "published": true,
      "categories": [
        "characters",
        "animation"
      ],
      "media": [
        {
          "id": "art-9",
          "type": "image",
          "src": "assets/projects/doppelganger/art-9.webp",
          "alt": "A moonlit forest, painted in deep blues and violet.",
          "caption": "A moonlit forest, painted in deep blues and violet.",
          "categories": [],
          "homeOrder": 0,
          "layout": "full"
        },
        {
          "id": "art-2",
          "type": "image",
          "src": "assets/projects/doppelganger/art-2.webp",
          "alt": "Character lineup · 2024",
          "caption": "Character lineup · 2024",
          "categories": [
            "characters"
          ],
          "homeOrder": 1,
          "layout": "wide",
          "title": "Doppelgänger — characters"
        },
        {
          "id": "film-4",
          "type": "video",
          "src": "assets/projects/doppelganger/film-4.mp4",
          "poster": "assets/projects/doppelganger/art-9.webp",
          "caption": "Doppelgänger",
          "categories": [
            "animation"
          ],
          "homeOrder": null,
          "layout": "full"
        }
      ]
    },
    {
      "id": "backrooms",
      "title": "The Backrooms",
      "subtitle": "Frame-by-frame animation & character design",
      "year": "2022",
      "description": "Character design and frame-by-frame animation for a class project.",
      "published": true,
      "categories": [
        "characters",
        "animation"
      ],
      "media": [
        {
          "id": "art-3",
          "type": "image",
          "src": "assets/projects/backrooms/art-3.webp",
          "alt": "Character design · 2022",
          "caption": "Character design · 2022",
          "categories": [
            "characters"
          ],
          "homeOrder": 3,
          "layout": "full"
        },
        {
          "id": "film-3",
          "type": "video",
          "src": "assets/projects/backrooms/film-3.mp4",
          "poster": "assets/projects/backrooms/film-3.jpg",
          "caption": "The Backrooms",
          "categories": [
            "animation"
          ],
          "homeOrder": null,
          "layout": "full"
        }
      ]
    },
    {
      "id": "beezy",
      "title": "Beezy",
      "subtitle": "Frame-by-frame animation",
      "year": "2024",
      "description": "A personal animation project exploring hand-drawn character movement.",
      "published": true,
      "categories": [
        "animation"
      ],
      "media": [
        {
          "id": "film-5",
          "type": "video",
          "src": "assets/projects/beezy/film-5.mp4",
          "poster": "assets/projects/beezy/film-5.jpg",
          "caption": "Beezy",
          "categories": [
            "animation"
          ],
          "homeOrder": null,
          "layout": "full"
        }
      ]
    },
    {
      "id": "who-to-drown-with",
      "title": "Who to drown with",
      "subtitle": "Animatic",
      "year": "2022",
      "description": "A personal animatic, told through drawn frames.",
      "published": true,
      "categories": [
        "animation"
      ],
      "media": [
        {
          "id": "film-0",
          "type": "video",
          "src": "assets/projects/who-to-drown-with/film-0.mp4",
          "poster": "assets/projects/who-to-drown-with/film-0.jpg",
          "caption": "Who to drown with",
          "categories": [
            "animation"
          ],
          "homeOrder": 5,
          "layout": "wide"
        }
      ]
    },
    {
      "id": "salty",
      "title": "Salty",
      "subtitle": "Animatic",
      "year": "2023",
      "description": "An animatic created as a class project.",
      "published": true,
      "categories": [
        "animation"
      ],
      "media": [
        {
          "id": "film-2",
          "type": "video",
          "src": "assets/projects/salty/film-2.mp4",
          "poster": "assets/projects/salty/film-2.jpg",
          "caption": "Salty",
          "categories": [
            "animation"
          ],
          "homeOrder": null,
          "layout": "full"
        }
      ]
    },
    {
      "id": "black-death",
      "title": "Black Death",
      "subtitle": "Illustration",
      "year": "",
      "description": "A personal illustrated poster.",
      "published": true,
      "categories": [
        "illustration"
      ],
      "media": [
        {
          "id": "art-1",
          "type": "image",
          "src": "assets/projects/black-death/art-1.webp",
          "alt": "Black Death · Personal project",
          "caption": "Black Death · Personal project",
          "categories": [
            "illustration"
          ],
          "homeOrder": 2,
          "layout": "narrow"
        }
      ]
    },
    {
      "id": "sketchbook",
      "title": "Sketchbook",
      "subtitle": "Character exploration & illustration",
      "year": "",
      "description": "A collection of personal illustration, silhouette practice and character studies.",
      "published": true,
      "categories": [
        "characters",
        "illustration"
      ],
      "media": [
        {
          "id": "art-5",
          "type": "image",
          "src": "assets/projects/sketchbook/art-5.webp",
          "alt": "Costume and silhouette exploration · 2024",
          "caption": "Costume and silhouette exploration · 2024",
          "categories": [
            "characters"
          ],
          "homeOrder": 4,
          "layout": "narrow",
          "title": "Character explorations"
        },
        {
          "id": "art-4",
          "type": "image",
          "src": "assets/projects/sketchbook/art-4.webp",
          "alt": "Character exploration",
          "caption": "Character exploration",
          "categories": [
            "characters"
          ],
          "homeOrder": null,
          "layout": "portrait"
        },
        {
          "id": "film-6",
          "type": "video",
          "src": "assets/projects/sketchbook/film-6.mp4",
          "poster": "assets/projects/sketchbook/art-11.webp",
          "caption": "Sketchbook",
          "categories": [
            "animation"
          ],
          "homeOrder": null,
          "layout": "full"
        },
        {
          "id": "expressions",
          "type": "image",
          "src": "assets/projects/sketchbook/art-11.webp",
          "alt": "Character head shape and expression sketches",
          "caption": "Shape and expression studies",
          "categories": [
            "characters"
          ],
          "homeOrder": null,
          "layout": "full"
        },
        {
          "id": "art-0",
          "type": "image",
          "src": "assets/projects/sketchbook/art-0.webp",
          "alt": "A canvas of characters",
          "caption": "A canvas of characters",
          "categories": [
            "illustration"
          ],
          "homeOrder": 6,
          "layout": "portrait",
          "title": "A canvas of characters"
        }
      ]
    },
    {
      "id": "social-animatic",
      "title": "Social media animatic",
      "subtitle": "Animatic",
      "year": "2022",
      "description": "A short character animatic created around a TikTok sound.",
      "published": true,
      "categories": [
        "animation"
      ],
      "media": [
        {
          "id": "film-1",
          "type": "video",
          "src": "assets/projects/social-animatic/film-1.mp4",
          "poster": "assets/projects/social-animatic/film-1.jpg",
          "caption": "Social media animatic",
          "categories": [
            "animation"
          ],
          "homeOrder": null,
          "layout": "full"
        }
      ]
    }
  ]
};
