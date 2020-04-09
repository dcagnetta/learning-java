export interface StartSession {
  type: SessionType,
  session: string,
  person?: string
}

export type SessionType = 'New' | 'Join';
