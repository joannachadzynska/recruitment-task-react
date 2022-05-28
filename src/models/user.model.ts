export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    type: "User";
    score: number;
}
export interface UserDetails {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    html_url: string;
    type: "User";
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}

export interface UserSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}
