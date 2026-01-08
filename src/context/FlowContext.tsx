"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AssessmentAnswers {
  purpose?: string;
  innovationType?: string;
  industry?: string;
  geography?: string[];
  stage?: string;
}

interface AnalysisResult {
  noveltyScore: number;
  similarPatents: number;
  riskLevel: "low" | "medium" | "high";
  concepts: string[];
}

interface BookingDetails {
  providerId: string;
  providerName: string;
  date: string;
  time: string;
  consultationType: string;
  expertName: string;
}

interface IPMatter {
  id: string;
  title: string;
  type: "patent" | "trademark" | "design";
  status: "assessment" | "analysis" | "consultation" | "filing" | "granted";
  provider?: string;
  nextAction?: string;
  nextDate?: string;
}

interface FlowState {
  assessment: AssessmentAnswers;
  analysis: AnalysisResult | null;
  booking: BookingDetails | null;
  matters: IPMatter[];
  isLoggedIn: boolean;
  userName: string;
}

interface FlowContextType {
  state: FlowState;
  setAssessment: (answers: AssessmentAnswers) => void;
  setAnalysis: (result: AnalysisResult) => void;
  setBooking: (details: BookingDetails) => void;
  addMatter: (matter: IPMatter) => void;
  login: (name: string) => void;
  logout: () => void;
  reset: () => void;
}

const defaultState: FlowState = {
  assessment: {},
  analysis: null,
  booking: null,
  matters: [
    {
      id: "matter-001",
      title: "Patient Outcome Prediction Algorithm",
      type: "patent",
      status: "consultation",
      provider: "Drew & Napier",
      nextAction: "Consultation",
      nextDate: "Jan 10, 2:00 PM",
    },
    {
      id: "matter-002",
      title: "HealthPredict™ Brand",
      type: "trademark",
      status: "analysis",
      nextAction: "Find Provider",
    },
  ],
  isLoggedIn: false,
  userName: "Sarah",
};

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FlowState>(defaultState);

  const setAssessment = (answers: AssessmentAnswers) => {
    setState((prev) => ({ ...prev, assessment: { ...prev.assessment, ...answers } }));
  };

  const setAnalysis = (result: AnalysisResult) => {
    setState((prev) => ({ ...prev, analysis: result }));
  };

  const setBooking = (details: BookingDetails) => {
    setState((prev) => ({ ...prev, booking: details }));
  };

  const addMatter = (matter: IPMatter) => {
    setState((prev) => ({ ...prev, matters: [...prev.matters, matter] }));
  };

  const login = (name: string) => {
    setState((prev) => ({ ...prev, isLoggedIn: true, userName: name }));
  };

  const logout = () => {
    setState((prev) => ({ ...prev, isLoggedIn: false }));
  };

  const reset = () => {
    setState({ ...defaultState, isLoggedIn: state.isLoggedIn, userName: state.userName });
  };

  return (
    <FlowContext.Provider
      value={{ state, setAssessment, setAnalysis, setBooking, addMatter, login, logout, reset }}
    >
      {children}
    </FlowContext.Provider>
  );
}

export function useFlow() {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error("useFlow must be used within FlowProvider");
  }
  return context;
}
