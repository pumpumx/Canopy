import React, { useState } from 'react';

interface MenuCreationBoxProps {
  onCreateMenu: (menuName: string, creationDate: string) => void;
}

export const MenuCreationBox: React.FC<MenuCreationBoxProps> = ({ onCreateMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuName, setMenuName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!menuName.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Create timestamp
    const creationDate = new Date().toISOString();

    // Call parent handler with menu data
    onCreateMenu(menuName, creationDate);

    // Reset form
    setMenuName('');
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setMenuName('');
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Create Menu Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative w-full max-w-md aspect-square rounded-3xl bg-white/60 backdrop-blur-sm border-2 border-dashed border-lavender-400 hover:border-lavender-500 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8">
          {/* Plus Icon */}
          <div className="w-24 h-24 rounded-full bg-linear-to-br from-purple-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="text-center">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">
              Create New Menu
            </h3>
            <p className="text-sm text-gray-600">
              Add a new business menu to your kiosk
            </p>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-lavender-400/40 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-lavender-400/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-lavender-400/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-lavender-400/40 rounded-br-lg" />
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">
            {/* Modal Header */}
            <div className="bg-linear-to-br from-lavender-600 to-lavender-700 px-8 py-6 text-white">
              <h2 className="text-2xl font-bold font-serif">Create New Menu</h2>
              <p className="text-sm opacity-90 mt-1">Enter details for your business menu</p>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                {/* Menu Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="menuName"
                    className="block text-sm font-semibold text-gray-700 tracking-wide"
                  >
                    Menu Name <span className="text-lavender-600">*</span>
                  </label>
                  <input
                    id="menuName"
                    type="text"
                    value={menuName}
                    onChange={(e) => setMenuName(e.target.value)}
                    placeholder="e.g., Downtown Coffee Shop"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-lavender-500 focus:ring-4 focus:ring-lavender-100 outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                    required
                    autoFocus
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This will be the display name for your business menu
                  </p>
                </div>

                {/* Creation Date Info (placeholder for backend data) */}
                <div className="p-4 bg-lavender-50 rounded-xl border border-lavender-200">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-lavender-600 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Creation timestamp will be auto-generated
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        The system will automatically record the creation date and time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !menuName.trim()}
                  className="flex-1 px-5 py-3 rounded-xl bg-linear-to-r from-purple-300 to-purple-200 text-white font-semibold shadow-lg shadow-lavender-500/30 hover:shadow-xl hover:shadow-lavender-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <p className='text-black text-center'>Creating...</p>
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className='text-black'>Create Menu</p>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};
