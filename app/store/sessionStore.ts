import { create } from 'zustand';

interface SessionState {
  sessionId: string | null;
  sessionData: any | null;
  sessionDetails: any | null;
  sessionAnalysis: any | null;
  
  // Actions
  setSessionId: (id: string | null) => void;
  setSessionData: (data: any | null) => void;
  setSessionDetails: (details: any | null) => void;
  setSessionAnalysis: (analysis: any | null) => void;
  resetSession: () => void;
}

export const useSessionStore = create<SessionState>((set: any) => ({
  sessionId: null,
  sessionData: null,
  sessionDetails: null,
  sessionAnalysis: null,
  
  // Actions
  setSessionId: (id: string | null) => set({ sessionId: id }),
  setSessionData: (data: any | null) => set({ sessionData: data }),
  setSessionDetails: (details: any | null) => set({ sessionDetails: details }),
  setSessionAnalysis: (analysis: any | null) => set({ sessionAnalysis: analysis }),
  resetSession: () => set({
    sessionId: null,
    sessionData: null,
    sessionDetails: null,
    sessionAnalysis: null,
  }),
})); 