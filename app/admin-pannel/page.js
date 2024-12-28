'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import {
  User,
  PenOff,
  ChartLine,
  FileText,
  Settings,
  Home,
  Users,
} from 'lucide-react';
import AdminPannelHome from '@/components/AdminPannelHome';

export default function AdminPanel() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Link href={'/auth/signin'}>لطفا وارد حساب کاربری خود شوید.</Link>
      </div>
    );
  }

  return (
<>
<AdminPannelHome/>
</>
  );
}
