import {groq} from 'next-sanity';
export const experienceQuery = groq`
  *[_type == 'experience']{
    ...,
    technologies[]->
  }
`

export const pageInfoQuery = groq`
  *[_type == 'pageInfo'][0]
`
export const projectQuery = groq`
  *[_type == 'project']{
    ...,
    technologies[]->
  }
`

export const skillQuery = groq`
  *[_type == 'skill']
`

export const socialQuery = groq`
  *[_type == 'social']
`

