const API_latest = require('../api/latest/index.json');

module.exports = {
    title: "Oat++",
    description: "Light, zero-dependency web-framework. Create bleedingly-fast web-services. C++",

    componentsDir: "docs/.vuepress/components",

    ga: "UA-72424701-2",

    shouldPrefetch: function() {
      return false;
    },

    head: [
        ['link', { rel: 'icon', href: '/logo_x64.png' }]
    ],

    themeConfig: {

        logo: "https://raw.githubusercontent.com/lganzzzo/oatpp-website-res/master/logo_x400.png",

        // Assumes GitHub. Can also be a full GitLab url.
        repo: "https://github.com/oatpp/oatpp",

        // if your docs are in a different repo from your main project:
        docsRepo: "https://github.com/oatpp/website",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,

        themeConfig: {
            lastUpdated: 'Last Updated', // string | boolean
        },

        nav: [
            {text: "Benchmark", link: "/benchmark/websocket/5-million/"},
            {text: "Examples", link: "/examples/crud/"},
            {text: "Docs", link: "/docs/start/"},
            {text: "About", link: "/about/"}
        ],
        sidebar: [
            {
                title: "About",
                collapsable: true,
                children: [
                    ["/about/", "About"],
                    ["/contributing/", "Contributing"],
                    ["/status/build/", "Build Status"]
                ]
            },
            {
                title: "Benchmark",
                collapsable: true,
                children: [
                    ["/benchmark/info/", "Info"],
                    ["/benchmark/aws/", "Amazon Web Services"],
                    ["/benchmark/digital-ocean/", "Digital Ocean"],
                    ["/benchmark/websocket/5-million/", "5 Million WebSockets"],
                    ["/benchmark/websocket/2-million/", "2 Million WebSockets"]
                ]
            },
            {
                title: "Examples",
                collapsable: true,
                children: [
                    ["/examples/crud/", "CRUD API With Swagger-UI"],
                    ["/examples/hls-media-stream/", "HTTP Live Streaming Server"],
                    ["/examples/async-api/", "Asynchronous API"],
                    ["/examples/api-client/", "HTTP Requests With ApiClient"],
                    ["/examples/libressl/", "TLS With Libressl"],
                    ["/examples/consul/", "Consul Integration"],
                    ["/examples/postgresql/", "PostgreSQL Database"]
                ]
            },{
                title: "Start",
                collapsable: true,
                children: [
                    ["/docs/start/", "Getting Started"],
                    ["/docs/start/step-by-step/", "Step-By-Step Guide"],
                    ["/docs/start/project/", "Starter Project"],
                    ["/docs/start/project-async-api/", "Async API - Starter Project"],
                    ["/docs/start/module/", "Oatpp Module - Starter Project"],
                ]
            },            {
                title: "Overview",
                collapsable: true,
                children: [
                    ["/docs/simple-vs-async/", "Simple vs Async"],
                    ["/docs/async/", "Async"],
                    ["/docs/oatpp-coroutines/", "Oatpp Coroutines"],
                    ["/docs/components/api-controller/", "Api Controller"],
                    ["/docs/components/api-client/", "Api Client"],
                    ["/docs/components/dto/", "Data Transfer Object (DTO)"]
                ]
            },
            {
                title: "Modules",
                collapsable: true,
                children: [
                    ["/docs/modules/oatpp/", "oatpp"],
                    ["/docs/modules/oatpp-consul/", "oatpp-consul"],
                    ["/docs/modules/oatpp-curl/", "oatpp-curl"],
                    ["/docs/modules/oatpp-libressl/", "oatpp-libressl"],
                    ["/docs/modules/oatpp-mbedtls/", "oatpp-mbedtls"],
                    ["/docs/modules/oatpp-swagger/", "oatpp-swagger"],
                    ["/docs/modules/oatpp-websocket/", "oatpp-websocket"]
                ]
            },
            {
                title: "API Reference",
                collapsable: true,
                children: API_latest
            }
        ]

    }
}