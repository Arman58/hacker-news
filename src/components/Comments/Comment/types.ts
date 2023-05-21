
export interface SingleComment {
    by: string
    id: number
    kids: number[]
    parent: number
    text: string
    time: number
    type: string
  }
export type CommentProps = {
    comment:SingleComment
}