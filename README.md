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

  <img width="250" height="250" src="https://github.com/user-attachments/assets/b524b924-8c3e-4b88-b433-bf84ad805982"/>

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

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Parameter</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>wrappingClass</code></td>
      <td><code>string[]</code></td>
      <td>Classes applied to the wrapper element (e.g., <code>container-fluid</code>).</td>
    </tr>
    <tr>
      <td><code>parentRowLogoClasses</code></td>
      <td><code>string[]</code></td>
      <td>Classes applied to the parent row for the logo (e.g., <code>col-md-8</code>, <code>logoPadding</code>).</td>
    </tr>
    <tr>
      <td><code>parentNavItemsClasses</code></td>
      <td><code>string[]</code></td>
      <td>Classes applied to the parent row for the navigation items (e.g., <code>col-md-4</code>, <code>navBarPadding</code>).</td>
    </tr>
    <tr>
      <td colspan="3"><strong>logo</strong></td>
    </tr>
    <tr>
      <td><code>logo.src</code></td>
      <td><code>string</code></td>
      <td>Path to the logo image (e.g., <code>assets/your-logo.png</code>).</td>
    </tr>
    <tr>
      <td><code>logo.alt</code></td>
      <td><code>string</code> (optional)</td>
      <td>Alt text for the logo image (e.g., <code>Company Logo</code>).</td>
    </tr>
    <tr>
      <td><code>logo.imageClassNames</code></td>
      <td><code>string[]</code></td>
      <td>Classes applied to the logo image (e.g., <code>img-fluid</code>).</td>
    </tr>
    <tr>
      <td colspan="3"><strong>navRow</strong></td>
    </tr>
    <tr>
      <td><code>navRow.drawerIconOpen</code></td>
      <td><code>string[]</code></td>
      <td>Classes for the icon when the drawer is open (e.g., <code>bi</code>, <code>bi-filter-right</code>, <code>drawerIcon</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.drawerIconClosed</code></td>
      <td><code>string[]</code></td>
      <td>Classes for the icon when the drawer is closed (e.g., <code>bi</code>, <code>bi-filter-left</code>, <code>drawerIcon</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items</code></td>
      <td><code>object[]</code></td>
      <td>List of navigation items.</td>
    </tr>
    <tr>
      <td><code>navRow.items.title</code></td>
      <td><code>string</code></td>
      <td>The title of the navigation item (e.g., <code>🏠 Home</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.route</code></td>
      <td><code>string</code></td>
      <td>The route path for the navigation item (e.g., <code>/</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.gridClasses</code></td>
      <td><code>string[]</code></td>
      <td>Grid classes for responsive layout of the navigation item (e.g., <code>col-md-2</code>, <code>col-sm-2</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.anchorTagClass</code></td>
      <td><code>string[]</code></td>
      <td>Classes applied to the anchor tag for the item (e.g., <code>nav-link</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.anchorTagClassMobile</code></td>
      <td><code>string[]</code></td>
      <td>Classes applied to the anchor tag for mobile devices (e.g., <code>mobile-item</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.dropDownParentClasses</code></td>
      <td><code>string[]</code> (optional)</td>
      <td>Classes applied to the parent element of a dropdown menu (e.g., <code>dropdown</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.subNavOpenClasses</code></td>
      <td><code>string[]</code> (optional)</td>
      <td>Classes for the icon indicating that the sub-navigation is open (e.g., <code>bi</code>, <code>bi-caret-up-fill</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.subNavCloseClasses</code></td>
      <td><code>string[]</code> (optional)</td>
      <td>Classes for the icon indicating that the sub-navigation is closed (e.g., <code>bi</code>, <code>bi-caret-down-fill</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.subNav</code></td>
      <td><code>object[]</code> (optional)</td>
      <td>List of submenu items for a navigation item with a dropdown.</td>
    </tr>
    <tr>
      <td><code>navRow.items.subNav.title</code></td>
      <td><code>string</code></td>
      <td>The title of a sub-navigation item (e.g., <code>💬 Consulting</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.subNav.route</code></td>
      <td><code>string</code></td>
      <td>The route path for a sub-navigation item (e.g., <code>/services/consulting</code>).</td>
    </tr>
    <tr>
      <td><code>navRow.items.subNav.cssClasses</code></td>
      <td><code>string[]</code></td>
      <td>CSS classes applied to the sub-navigation item (e.g., <code>dropdown-item</code>).</td>
    </tr>
  </tbody>
</table>

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
    <li><strong> Bootstrap 5.0.0 </strong></li>
  </ul>

  <h2>📜 License</h2>
  <p>MIT © DigitalCastle</p>

</body>
</html>
