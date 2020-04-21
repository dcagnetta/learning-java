export interface StartSession {
  type: SessionType,
  name: string,
  username?: string
}

export type SessionType = 'New' | 'Join';

export interface JoinSession {
  shortId: string;
  username: string;
}
