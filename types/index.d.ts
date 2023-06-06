export type NavItem = {
    title: string
    idName: string
}

export type SiteType = {
    initials: string
    name: string
    description: string
    url: string
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

export type ExperienceType = {
    company: string,
    role: string,
    date: string,
    details: string[]
}

export type ProjectType = {
    title: string,
    desc: string, 
    demo: string,
    github: string,
    tags: string[]
}