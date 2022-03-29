export interface userProps {
    id: number;
    name: string;
    email: string;
    username: string;
}

export interface taskProps {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}
