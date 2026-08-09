import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose
}) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setDownloading(false);
      setProgress(0);
      setDownloadComplete(false);
    }
  }, [isOpen]);

  const handleStartDownload = () => {
    setDownloading(true);
    setProgress(5);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDownloadComplete(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mx-auto mb-4 shadow-xs">
            <Smartphone className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center space-x-1 text-[11px] font-extrabold uppercase bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-md border border-emerald-200 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official APK • v2.4.0 (18.5 MB)</span>
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
            Download FF Arena App
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm font-medium mb-6">
            Get ultra-fast match notifications, instant 2s withdrawals, and custom room access directly on Android.
          </p>

          {/* Download Progress or Start Button */}
          {!downloadComplete ? (
            <div>
              {downloading ? (
                <div className="space-y-3 py-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Downloading APK...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full bg-purple-600 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">Please do not close this window</p>
                </div>
              ) : (
                <button
                  onClick={handleStartDownload}
                  className="w-full py-3.5 px-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-slate-900/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5 text-purple-400" />
                  <span>START APK DOWNLOAD ⚡</span>
                </button>
              )}
            </div>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-3 animate-in fade-in">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-emerald-950 text-sm">
                APK Download Complete!
              </h4>
              <p className="text-xs text-emerald-800 font-medium">
                Check your Downloads folder to install <strong className="font-bold">FF_Arena_v2.4.0.apk</strong>
              </p>
            </div>
          )}

          {/* Installation Steps */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-left space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              INSTALLATION INSTRUCTIONS
            </div>
            
            <ol className="space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Click "Open" on the downloaded APK file.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Enable <strong className="text-slate-900 font-bold">"Allow installation from unknown sources"</strong> in Android settings if prompted.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Launch FF Arena and log in to start winning!</span>
              </li>
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
};
