<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
</head>
<body>

  <h1>🧭 ez-nav</h1>
  <p>
    A <strong>config-driven, responsive Angular navigation bar</strong> that integrates seamlessly with Bootstrap layout and Bootstrap Icons.
  </p>

  <img width="250" height="250" src="https://github.com/user-attachments/assets/b4d760ec-2d98-48f9-859c-7ac14e4dba19"/>

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
  <p><strong>✅ Requires Angular 19.2.0+</strong><br>
  <p><strong>✅ Requires Bootstrap 5.0.0+ </strong><br>

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
  <p>To ensure proper styling, include Bootstrap's CSS in your project:</p>
  <pre><code>@import 'bootstrap/dist/css/bootstrap.min.css';
</code></pre>
  <p>
  <strong>Important:</strong>  All custom styles for this component should be placed in your project's root <code>style.css</code> file.  Here are a few examples:
  </p>
  <pre><code>.logoPadding {
  padding: 10px;
}
.drawerIcon {
  font-size: 1.5rem;
  cursor: pointer;
}
</code></pre>

  <h2>📚 Dependencies</h2>
  <ul>
    <li><strong>Angular 19.2.0+</strong></li>
    <li><strong> Bootstrap 5 </strong></li>
  </ul>

  <h2>📜 License</h2>
  <p>MIT © DigitalCastle</p>

</body>
</html>
