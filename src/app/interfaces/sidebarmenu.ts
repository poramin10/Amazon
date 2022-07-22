export interface SideBarMenu{
  nameMenu: String,
  nameTodo: String,
  subMenu: SubMenu[]
}

export interface SubMenu {
  name: string
  url: string
}
