import { ReactNode } from 'react';
import Navigation from '../navigation';

type Props = {
  children: ReactNode;
};
const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="relative">
      <Navigation />
      {children}
    </main>
  );
};
export default DashboardLayout;
