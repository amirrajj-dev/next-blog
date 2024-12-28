import { getServerSession } from 'next-auth';
import Signin from '@/components/Signin';
import authOptions from '@/utils/configs/authConfigs';
import { redirect } from 'next/navigation';
// import authOptions from '@/utils/configs/authConfigs';

export default async function SignInPage() {
  const session = await getServerSession(authOptions)
  if (session?.user.id) redirect('/')

  return (
    <Signin/>
  );
}