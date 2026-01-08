"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Upload, FileText, Zap, X, File, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function UploadPage() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    router.push("/analyzing");
  };

  const handleDemoAnalysis = () => {
    router.push("/analyzing");
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] pt-28 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/assessment"
          className="inline-flex items-center gap-1 text-[var(--neutral-600)] hover:text-[var(--neutral-900)] mb-6 text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Assessment
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--neutral-900)] mb-3">
            Upload Your Innovation
          </h1>
          <p className="text-[var(--neutral-600)]">
            Our AI will analyze your document and search for similar existing IP
          </p>
        </motion.div>

        {/* Upload Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6">
            {/* Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-input")?.click()}
              className={cn(
                "border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all",
                isDragging
                  ? "border-[var(--primary)] bg-[var(--primary)]/5"
                  : file
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-[var(--neutral-300)] hover:border-[var(--primary)] hover:bg-[var(--neutral-50)]"
              )}
            >
              <input
                id="file-input"
                type="file"
                accept=".pdf,.docx,.doc,.txt"
                onChange={handleFileChange}
                className="hidden"
              />

              {file ? (
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                    <File className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div className="font-medium text-[var(--neutral-900)] mb-1">{file.name}</div>
                  <div className="text-sm text-[var(--neutral-500)] mb-3">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                    }}
                    className="text-sm text-[var(--neutral-600)] hover:text-red-600 flex items-center gap-1"
                  >
                    <X className="w-4 h-4" /> Remove
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <div className="font-medium text-[var(--neutral-900)] mb-1">
                    Drop your file here
                  </div>
                  <div className="text-sm text-[var(--neutral-500)] mb-3">or click to browse</div>
                  <div className="text-xs text-[var(--neutral-400)]">
                    PDF, DOCX, TXT up to 10MB
                  </div>
                </>
              )}
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 h-px bg-[var(--neutral-200)]"></div>
              <span className="px-4 text-sm text-[var(--neutral-500)]">or describe in text</span>
              <div className="flex-1 h-px bg-[var(--neutral-200)]"></div>
            </div>

            {/* Text Input */}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your innovation in plain English. Include key features, technical approach, and what makes it unique..."
              className="w-full h-32 p-4 border border-[var(--neutral-200)] rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-light)]/20 focus:border-[var(--primary-light)] text-[var(--neutral-700)]"
            />

            {/* Analyze Button */}
            <Button
              onClick={handleAnalyze}
              disabled={!file && !description.trim()}
              className="w-full mt-6"
              size="lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Analyze Now
            </Button>

            {/* Demo Option */}
            <div className="mt-6 p-4 bg-[var(--neutral-50)] rounded-xl">
              <div className="text-xs font-medium text-[var(--neutral-700)] mb-2">
                Try a demo analysis:
              </div>
              <button
                onClick={handleDemoAnalysis}
                className="text-sm text-[var(--primary)] hover:underline flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Patient Outcome Prediction Algorithm
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-[var(--neutral-500)]">
            Your documents are encrypted and processed securely.
            <br />
            Files are automatically deleted after 30 days.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
