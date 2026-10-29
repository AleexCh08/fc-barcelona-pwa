import React from 'react';
import { Button } from '../ui/Button';

export const NavigationBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-summit-white border-b border-carbon-ink py-[15px]">
      <div className="layout-container flex justify-between items-center">
        {/* Simulación del escudo LE CAMP como marca del Barça */}
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] bg-signal-red flex items-center justify-center rounded-sm">
             <span className="text-summit-white font-display font-semibold text-xs">FCB</span>
          </div>
          <span className="font-display font-semibold text-lg uppercase tracking-tight">Le Camp</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="hidden md:block">
             <span className="flex items-center gap-2">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <line x1="3" y1="12" x2="21" y2="12"></line>
                 <line x1="3" y1="6" x2="21" y2="6"></line>
                 <line x1="3" y1="18" x2="21" y2="18"></line>
               </svg>
               MENU
             </span>
          </Button>
          <Button variant="primary">CALENDARIO</Button>
        </div>
      </div>
    </nav>
  );
};