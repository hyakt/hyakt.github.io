declare module 'react-flippy'

export type Product = {
  name: string
  image?: any
  date?: Date
  description?: string
  tags?: Array<string>
  badge?: any
  github?: string
  url?: string
}

export type Skill = {
  name: string
  description: string
  relations: Array<string>
  image: any
  color: string
  backgroundColor: string
}
