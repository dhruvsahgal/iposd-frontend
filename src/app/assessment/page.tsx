"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Shield,
  Folder,
  Search,
  Users,
  Lightbulb,
  Tag,
  Palette,
  FileText,
  Lock,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Check,
  Upload,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: "purpose",
    question: "What brings you here today?",
    type: "single",
    options: [
      {
        id: "protect",
        label: "Protect an Innovation",
        description: "I have something new I want to protect",
        icon: Shield,
      },
      {
        id: "manage",
        label: "Manage Existing IP",
        description: "I have IP assets I need help managing",
        icon: Folder,
      },
      {
        id: "research",
        label: "Research Before Filing",
        description: "I want to check if similar IP exists",
        icon: Search,
      },
      {
        id: "find_provider",
        label: "Find a Provider",
        description: "I know what I need and want to find help",
        icon: Users,
      },
    ],
  },
  {
    id: "innovation_type",
    question: "What best describes your innovation?",
    type: "single",
    options: [
      {
        id: "invention",
        label: "Invention or Technical Innovation",
        description: "A new product, process, or technology",
        icon: Lightbulb,
      },
      {
        id: "brand",
        label: "Brand Name, Logo, or Slogan",
        description: "Your business identity elements",
        icon: Tag,
      },
      {
        id: "design",
        label: "Product Design or Appearance",
        description: "The visual look of your product",
        icon: Palette,
      },
      {
        id: "creative",
        label: "Creative or Artistic Work",
        description: "Software, content, or artistic creations",
        icon: FileText,
      },
      {
        id: "confidential",
        label: "Confidential Business Information",
        description: "Trade secrets and proprietary methods",
        icon: Lock,
      },
      {
        id: "not_sure",
        label: "I'm Not Sure",
        description: "Help me figure out my IP needs",
        icon: HelpCircle,
      },
    ],
  },
  {
    id: "industry",
    question: "Which industry are you in?",
    type: "single",
    options: [
      { id: "healthcare", label: "Healthcare & Life Sciences" },
      { id: "fintech", label: "Financial Services & Fintech" },
      { id: "manufacturing", label: "Manufacturing & Engineering" },
      { id: "infocomm", label: "Infocomm & Technology" },
      { id: "food", label: "Food & Beverage" },
      { id: "retail", label: "Retail & E-commerce" },
      { id: "cleantech", label: "Clean Technology & Energy" },
      { id: "media", label: "Media & Entertainment" },
      { id: "other", label: "Other" },
    ],
  },
  {
    id: "geography",
    question: "Where do you want protection?",
    type: "multi",
    options: [
      { id: "sg_only", label: "Singapore Only", flag: "🇸🇬" },
      { id: "asean", label: "ASEAN Region", flag: "🌏" },
      { id: "asia_pacific", label: "Asia Pacific", flag: "🌏" },
      { id: "global", label: "Global Coverage", flag: "🌐" },
    ],
  },
  {
    id: "stage",
    question: "What stage is your innovation at?",
    type: "single",
    options: [
      { id: "idea", label: "Idea Stage", description: "Concept or early research phase" },
      { id: "prototype", label: "Prototype", description: "Building or testing initial version" },
      { id: "market_ready", label: "Market Ready", description: "Preparing for commercial launch" },
      { id: "selling", label: "Already Selling", description: "Product/service in market" },
      { id: "scaling", label: "Scaling Up", description: "Expanding to new markets" },
    ],
  },
];

export default function AssessmentPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleSelect = (optionId: string) => {
    if (currentQuestion.type === "single") {
      setAnswers({ ...answers, [currentQuestion.id]: optionId });
    } else {
      const current = (answers[currentQuestion.id] as string[]) || [];
      if (current.includes(optionId)) {
        setAnswers({
          ...answers,
          [currentQuestion.id]: current.filter((id) => id !== optionId),
        });
      } else {
        setAnswers({ ...answers, [currentQuestion.id]: [...current, optionId] });
      }
    }
  };

  const isSelected = (optionId: string) => {
    const answer = answers[currentQuestion.id];
    if (Array.isArray(answer)) {
      return answer.includes(optionId);
    }
    return answer === optionId;
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === "multi") {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/upload");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[var(--neutral-50)] pt-28 pb-16 flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-[var(--neutral-900)] mb-4">
              Assessment Complete!
            </h1>
            <p className="text-lg text-[var(--neutral-600)] mb-8">
              Based on your answers, we&apos;ve identified your IP needs. You can now upload a
              document for AI analysis or browse matched experts.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card hover className="p-6 text-center cursor-pointer">
                <Upload className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="font-semibold text-[var(--neutral-900)] mb-2">
                  Upload for AI Analysis
                </h3>
                <p className="text-sm text-[var(--neutral-600)]">
                  Get instant prior art search and novelty assessment
                </p>
              </Card>
              <Card hover className="p-6 text-center cursor-pointer">
                <Sparkles className="w-10 h-10 text-[var(--accent-purple)] mx-auto mb-4" />
                <h3 className="font-semibold text-[var(--neutral-900)] mb-2">View Matched Experts</h3>
                <p className="text-sm text-[var(--neutral-600)]">
                  See providers matched to your specific needs
                </p>
              </Card>
            </div>

            <Button variant="ghost" onClick={() => { setIsComplete(false); setCurrentStep(0); setAnswers({}); }}>
              Start Over
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[var(--neutral-600)]">
              Step {currentStep + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-[var(--primary)]">
              {Math.round(progress)}% complete
            </span>
          </div>
          <div className="h-2 bg-[var(--neutral-200)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--neutral-900)] mb-2">
              {currentQuestion.question}
            </h1>
            {currentQuestion.type === "multi" && (
              <p className="text-[var(--neutral-600)] mb-8">Select all that apply</p>
            )}

            {/* Options */}
            <div
              className={cn(
                "grid gap-3 mt-8",
                currentQuestion.options.length <= 4 ? "sm:grid-cols-2" : "sm:grid-cols-3"
              )}
            >
              {currentQuestion.options.map((option) => {
                const Icon = "icon" in option ? option.icon : null;
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "relative p-5 rounded-2xl border-2 text-left transition-all",
                      isSelected(option.id)
                        ? "border-[var(--primary)] bg-[var(--primary)]/5"
                        : "border-[var(--neutral-200)] bg-white hover:border-[var(--neutral-300)]"
                    )}
                  >
                    {isSelected(option.id) && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {"flag" in option && (
                      <span className="text-2xl mb-2 block">{option.flag}</span>
                    )}
                    {Icon && (
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center mb-3",
                          isSelected(option.id) ? "bg-[var(--primary)]/10" : "bg-[var(--neutral-100)]"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-6 h-6",
                            isSelected(option.id)
                              ? "text-[var(--primary)]"
                              : "text-[var(--neutral-500)]"
                          )}
                        />
                      </div>
                    )}
                    <div className="font-semibold text-[var(--neutral-900)]">{option.label}</div>
                    {"description" in option && (
                      <div className="text-sm text-[var(--neutral-500)] mt-1">
                        {option.description}
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0}
            className={cn(currentStep === 0 && "opacity-0 pointer-events-none")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={handleNext} disabled={!canProceed()}>
            {currentStep === questions.length - 1 ? "Complete" : "Continue"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
