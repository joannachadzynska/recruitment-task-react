import { User } from "./user.model";
export interface Commit {
    author: User;
    commit: CommitDetails;
    commiter: User;
    sha: string;
}

export interface CommitDetails {
    author: Author;
    message: string;
    committer: Author;
    comment_count: number;
}

export interface Author {
    name: string;
    email: string;
    date: string;
}
