import "typescript"

export type OmniType = "track" | "list" | "author"
export type OmniID = String
export type OmniURL = String
export type ServiceCode = String

//---------------------------------------

export interface OmniService {
  check(input: String): OmniType | null,
  get(id: OmniID, type: OmniType): OmniTrack | OmniList | OmniAuthor | null,
  track(input: OmniID | OmniURL): OmniTrack | null,
  list(input: OmniID | OmniURL): OmniList | null,
  author(input: OmniID | OmniURL): OmniAuthor | null,
  search(query: String, type: OmniType, limit: Number): OmniTrack[] | OmniList[] | OmniAuthor[]
}


//---------------------------------------

export interface OmniTrack {
  type: "track",
  title: String,
  author: StaticOmniAuthor,
  desc: String,
  image: OmniURL,
  url: OmniURL,
  omni_id: OmniID,
  service: ServiceInfo
}

export interface OmniList {
  type: "list",
  title: String,
  desc: String,
  url: OmniURL,
  omni_id: OmniID,
  tracks: OmniID[] | StaticOmniTrack[],
  service: ServiceInfo
}

export interface OmniAuthor {
  type: "author",
  name: String,
  bio: String,
  url: OmniURL,
  omni_id: OmniID,
  tracks: OmniID[] | StaticOmniTrack[],
  service: ServiceInfo
}


//---------------------------------------

export interface StaticOmniTrack {
  title: String,
  author: StaticOmniAuthor,
  omni_id: OmniID,
  service: ServiceInfo
}

export interface StaticOmniAuthor {
  name: String,
  url: OmniURL,
  omni_id: OmniID
}

export interface ServiceInfo {
  id: String,
  code: ServiceCode,
  name: String
}