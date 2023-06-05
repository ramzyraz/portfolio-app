export type NavItem = {
    title: string
    idName: string
}

export type SiteType = {
    initials: string
    name: string
    description: string
    url: string
    links: {
      linkedin: string
      github: string
      email: string
    }
}

export type BioType = {
    initial: string,
    name: string,
    bio: string,
}

export type IconType = {
    name: string,
    iconName: string,
    iconLink: string
}