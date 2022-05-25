export interface Commit {
    author: Author;
    commiter: Author;
    message: string;
    comment_count: number;
    verification: Verification;
}

export interface CommitResponse {
    sha: string;
    commit: Commit;
}

export interface Author {
    name: string;
    email: string;
    date: string;
}
export interface Verification {
    verified: boolean;
    reason: string;
    signature: string;
    payload: string;
}
