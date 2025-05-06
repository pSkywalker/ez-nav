<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ez-nav README</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet"/>
  <style>
    body { padding: 2rem; font-family: system-ui, sans-serif; background: #fff; }
    pre { background: #f8f9fa; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; }
    code { font-family: Consolas, monospace; }
    h1, h2, h3 { margin-top: 2rem; }
    ul li { margin-bottom: 0.5rem; }
  </style>
</head>
<body>

  <h1>🧭 ez-nav</h1>
  <p>
    A <strong>config-driven, responsive Angular navigation bar</strong> that integrates seamlessly with Bootstrap layout and Bootstrap Icons.
  </p>

  <h2>✨ Features</h2>
  <ul>
    <li>📱 Mobile-first responsive design</li>
    <li>🧩 Easily toggled mobile nav drawer</li>
    <li>🔽 Dropdown support with subnav items</li>
    <li>🎨 Full class-based customization for layout & styles</li>
    <li>🧠 Simple, declarative config-driven structure</li>
  </ul>

  <h2>📦 Installation</h2>
  <pre><code>npm install ez-nav</code></pre>
  <p><strong>✅ Requires Angular 15+</strong><br>
  🧰 Optional: Bootstrap + Bootstrap Icons for styling and layout.</p>

  <h2>🚀 Usage</h2>

  <h3>1. Import the component</h3>
  <pre><code>import { EzNavComponent } from 'ez-nav';</code></pre>

  <h3>2. Use in your component template</h3>
  <pre><code>&lt;ez-nav [header]="headerConfig"&gt;&lt;/ez-nav&gt;</code></pre>

  <h2>⚙️ Configuration Example</h2>
  <pre><code>public headerConfig: HeaderConfig = {
  wrappingClass: ["container-fluid"],
  parentRowLogoClasses: ["col-md-8", "col-sm-8", "col-10", "logoPadding"],
  parentNavItemsClasses: ["col-md-4", "col-sm-4", "col-2", "navBarPadding"],
  logo: {
    src: 'assets/your-logo.png',
    alt: 'Company Logo',
    imageClassNames: ['img-fluid']
  },
  navRow: {
    drawerIconOpen: ['bi', 'bi-filter-right', 'drawerIcon'],
    drawerIconClosed: ['bi', 'bi-filter-left', 'drawerIcon'],
    items: [
      {
        title: '🏠 Home',
        route: '/',
        gridClasses: ["col-md-2", "col-sm-2"],
        anchorTagClass: ['nav-link'],
        anchorTagClassMobile: ['mobile-item']
      },
      {
        title: '🛍️ Products',
        route: '/products',
        gridClasses: ["col-md-2", "col-sm-2"],
        anchorTagClass: ['nav-link'],
        anchorTagClassMobile: ['mobile-item']
      },
      {
        title: '🛠️ Services',
        route: '/services',
        gridClasses: ["col-md-2", "col-sm-2"],
        anchorTagClass: ['nav-link'],
        anchorTagClassMobile: ['mobile-item'],
        dropDownParentClasses: ['dropdown'],
        subNavOpenClasses: ["bi", "bi-caret-up-fill"],
        subNavCloseClasses: ["bi", "bi-caret-down-fill"],
        subNav: [
          {
            title: "💬 Consulting",
            route: "/services/consulting",
            cssClasses: ["dropdown-item"]
          },
          {
            title: "💻 Development",
            route: "/services/development",
            cssClasses: ["dropdown-item"]
          }
        ]
      },
      {
        title: '📞 Contact',
        route: '/contact',
        gridClasses: ["col-md-2", "col-sm-2"],
        anchorTagClass: ['nav-link'],
        anchorTagClassMobile: ["mobile-item"]
      }
    ]
  }
};</code></pre>

  <h2>🎨 Styling Tips</h2>
  <pre><code>.logoPadding {
  padding: 10px;
}
.drawerIcon {
  font-size: 1.5rem;
  cursor: pointer;
}</code></pre>

  <h2>📚 Dependencies</h2>
  <ul>
    <li>Angular 15+</li>
    <li>Optional: Bootstrap 5</li>
    <li>Recommended: <a href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons</a></li>
  </ul>

  <h3>To install Bootstrap Icons:</h3>
  <pre><code>npm install bootstrap-icons</code></pre>

  <h4>Add to <code>angular.json</code>:</h4>
  <pre><code>"styles": [
  "node_modules/bootstrap-icons/font/bootstrap-icons.css"
]</code></pre>

  <h2>📜 License</h2>
  <p>MIT © YourName</p>

</body>
</html>
