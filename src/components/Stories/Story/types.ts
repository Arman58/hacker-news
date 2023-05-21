import { Interface } from "readline"

export interface Data {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
  }
  
  export type StoryProps = {
    data:Data,
    fromHomePage?:boolean,
  }