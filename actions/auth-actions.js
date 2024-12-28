'use server';

import connectToDb from '@/utils/db/connectToDb';
import usersModel from '@/utils/models/user';
import { generateToken, hashedPassword, verifyToken } from '@/utils/validations/validations';
import { cookies } from 'next/headers';
import Swal from 'sweetalert2';

export const createUserAction = async (formData) => {
  try {
    await connectToDb();
    const { name, email, password } = Object.fromEntries(formData);

    const hashPassword = await hashedPassword(password);
    const users = await usersModel.find({});
    const user = await usersModel.findOne({ email: email });
    if (user) {

      return { ok: false, error: 'User already exists' };
    }
    await usersModel.create({
      name,
      email,
      password: hashPassword,
      role: users.length > 0 ? 'user' : 'admin',
    });

    const cookiesStore = await cookies(); // Await the cookies API call
    const accessToken = await generateToken({ email });
    cookiesStore.set('token', accessToken, {
      expires: new Date(Date.now() + 3600000),
      path: '/',
      maxAge: 3600000,
      secure: true,
      httpOnly: true,
    });

    Swal.fire({
      title: 'ثبت نام با موفقیت انجام شد!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      toast: true,
      position: 'top-left',
    });
    return { ok: true };
  } catch (error) {
    console.log('Error creating user =>' + error);
    return { ok: false, error: 'Registration failed' };
  }
};

export const getMe = async ()=>{
  try {
    const cookiesStore = await cookies(); // Await the cookies API call
    const token = cookiesStore.get('token');
    
    if (!token) {
      return { ok: false, error: 'Token not found' };
    }
    const verifiedToken = await verifyToken(token.value);
    
    const user = await usersModel.findOne({ email: verifiedToken.email });
    return { ok: true, user };
    } catch (error) {
      console.log('Error getting user =>' + error);
    }
}