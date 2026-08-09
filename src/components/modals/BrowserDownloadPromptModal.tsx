import React from 'react';
import { Download, FileText } from 'lucide-react';

interface BrowserDownloadPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDownload: () => void;
}

export const BrowserDownloadPromptModal: React.FC<BrowserDownloadPromptModalProps> = ({
  isOpen,
  onClose,
  onConfirmDownload
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      {/* Android Browser Native Download Confirmation Card */}
      <div className="relative bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 z-10 animate-in zoom-in-95 duration-200">
        
        <div className="text-left space-y-3">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Download file again?
          </h3>

          <p className="text-slate-600 text-sm font-medium leading-relaxed">
            Do you want to download <strong className="text-slate-900 font-extrabold">FFArena.apk (24.10 MB)</strong> again?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-end space-x-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-sm font-bold text-purple-600 hover:bg-purple-50 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onConfirmDownload();
              onClose();
            }}
            className="px-6 py-2.5 rounded-full text-sm font-extrabold bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20 active:scale-95 transition-all flex items-center space-x-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Download again</span>
          </button>
        </div>

      </div>
    </div>
  );
};
