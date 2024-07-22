import "typescript";
export type OmniType = "track" | "list" | "author";
export type OmniID = string;
export type OmniURL = string;
export type ServiceCode = string;
export interface OmniService {
    name: string;
    code: ServiceCode;
    check(input: string): OmniType | null;
    get(id: OmniID, type: OmniType): OmniTrack | OmniList | OmniAuthor | null;
    track(input: OmniID | OmniURL): OmniTrack | null;
    list(input: OmniID | OmniURL): OmniList | null;
    author(input: OmniID | OmniURL): OmniAuthor | null;
    search(query: string, type: OmniType, limit: Number): OmniTrack[] | OmniList[] | OmniAuthor[];
}
export interface OmniTrack {
    type: "track";
    title: string;
    author: StaticOmniAuthor;
    desc: string | null;
    image: OmniURL | null;
    url: OmniURL;
    omni_id: OmniID;
    service: ServiceInfo;
    likes: number | null;
}
export interface OmniList {
    type: "list";
    title: string;
    desc: string | null;
    image: OmniURL | null;
    url: OmniURL;
    omni_id: OmniID;
    tracks: OmniTrack[];
    service: ServiceInfo;
    likes: number | null;
}
export interface OmniAuthor {
    type: "author";
    name: string;
    bio: string;
    image: OmniURL | null;
    url: OmniURL;
    omni_id: OmniID;
    tracks: OmniTrack[];
    service: ServiceInfo;
    followers: number | null;
}
export interface StaticOmniTrack {
    title: string;
    author: StaticOmniAuthor;
    omni_id: OmniID;
    service: ServiceInfo;
}
export interface StaticOmniAuthor {
    name: string;
    url: OmniURL;
    omni_id: OmniID;
}
export interface ServiceInfo {
    id: string;
    code: ServiceCode;
    name: string;
}
//# sourceMappingURL=main.d.ts.map