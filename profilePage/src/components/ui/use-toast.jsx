import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  return (
    <ToastContext.Provider value={setToast}>
      {children}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
          <h3 className="font-bold">{toast.title}</h3>
          <p>{toast.description}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const setToast = useContext(ToastContext);
  if (!setToast) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return (toast) => {
    setToast(toast);
    setTimeout(() => setToast(null), 3000);
  };
}
