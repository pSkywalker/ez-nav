export interface NavRow{
  drawerIconOpen: string[],
  drawerIconClosed: string[],

  items: NavItem[]
}
export interface SubNavItem{
  title: string,
  route: string,
  cssClasses : string[]
}
export interface NavItem{
  title:string,
  route: string,
  gridClasses : string[],
  anchorTagClass: string[],
  anchorTagClassMobile: string[],

  dropDownParentClasses?: string[],
  subNavOpenClasses? : string[],
  subNavCloseClasses?: string[],
  subNav?: SubNavItem[]
}
export interface Logo{
  src: string,
  alt?: string,
  imageClassNames: string[]
}
export interface HeaderConfig{
  wrappingClass : string[],

  parentRowLogoClasses: string[],
  parentNavItemsClasses : string[],

  logo: Logo,
  navRow : NavRow
}
