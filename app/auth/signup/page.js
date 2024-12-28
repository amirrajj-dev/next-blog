import RegisterForm from '@/components/RegisterForm'
import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/utils/configs/authConfigs'
async function SignUpPage() {
  const session = await getServerSession(authOptions)
  if (session?.user.id) redirect('/')

  return (
    <RegisterForm/>
  )
}

export default SignUpPage