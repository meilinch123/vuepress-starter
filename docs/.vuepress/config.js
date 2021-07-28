module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", {name: "referrer", content: "no-referrer"}]
  ],
  base: "/", // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { 
        text: "环境配置", 
        items: [
          { text: 'node环境', link: "/project_config/"},
        ]
      },
      { text: "git规范", link: "/git/" },
      { text: "前端规范", link: "/font_specification/" },
    ],
    sidebar: {
      '/project_config/': [
        {
          title: 'npm相关配置',
          path: '/project_config/',
          collapsable: false,
          children: [
            '/project_config/nodeMVision',
            '/project_config/switchNpmUrl',
          ]
        },
      ],
      '/git/': [
        {
          title: 'git规范',
          path: '/git/',
          collapsable: false,
          children: [
            '/git/git',
          ]
        },
      ],
      '/font_specification/': [
        {
          title: '前端规范',
          path: '/font_specification/html_specification/html_specification',
          collapsable: false,
          children: [
            {
              title: 'HTMl书写规范',
              path: '/font_specification/html_specification/html_specification'
            },
            {
              title: 'CSS书写规范',
              path: '/font_specification/css_specification/css_specification'
            },
            {
              title: 'js规范',
              path: '/font_specification/js_specification/js_specification'
            },
            {
              title: 'ts规范',
              path: '/font_specification/ts_specification/ts_specification'
            },
            {
              title: 'stylelint 集成',
              path: '/font_specification/stylelint/stylelint'
            },
            {
              title: 'ESLint + prettier规范代码风格',
              path: '/font_specification/eslint_prettier/eslint_prettier'
            },
            {
              title: '项目目录结构规范',
              path: '/font_specification/structure/structure'
            },
          ]
        },
      ],
    },
  },
}
