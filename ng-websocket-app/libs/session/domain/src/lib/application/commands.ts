export interface StartSession {
  type: SessionType,
  name: string,
  person?: string
}

export type SessionType = 'New' | 'Join';
