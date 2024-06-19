import React from 'react';
import Header from '@/components/Header';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Header>
        {/* layout이 먼저 렌더링 // 이후 children(폴더 내 page) 렌더링 */}
        {children}
      </Header>
    </div>
  );
};

export default layout;
