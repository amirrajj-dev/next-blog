import connectToDb from "../db/connectToDb";
import usersModel from "../models/user";
import {
  comparePassword,
  generateToken,
  generateRefreshToken,
} from '@/utils/validations/validations';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please provide both email and password');
        }
        await connectToDb();
        const user = await usersModel.findOne({ email: credentials.email });
        if (!user) {
          throw new Error('No user found with that email');
        }
        const isValidPassword = await comparePassword(credentials.password, user.password);
        if (!isValidPassword) {
          throw new Error('Invalid password');
        }

        const accessToken = await generateToken({ id: user._id.toString(), email: user.email });
        const refreshToken = await generateRefreshToken({ id: user._id.toString(), email: user.email });
        console.log('role => '  , user.role);
        
        return {
          id: user._id.toString(),
          email: user.email,
          role : user.role,
          accessToken,
          refreshToken,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
        // console.log('user log inside jwt method => ' , user);
        
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          accessTokenExpires: Date.now() + 3600 * 1000, // 1 hour
          role: user.role,
          user: { id: user.id, email: user.email },
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }) {
        // console.log('log token inside session => ' , token);
        
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.error = token.error;
      session.role = token.role;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 3600 * 24, // 1 day
  },
  pages : {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user',
  },
  jwt: {
    secret: process.env.SECRET_KEY,
  },
};

async function refreshAccessToken(token) {
  try {
    const newAccessToken = await generateToken({
      id: token.user.id,
      email: token.user.email,
    });
    const newRefreshToken = await generateRefreshToken({
      id: token.user.id,
      email: token.user.email,
    });
    return {
      ...token,
      accessToken: newAccessToken,
      accessTokenExpires: Date.now() + 3600 * 1000, // 1 hour
      refreshToken: newRefreshToken,
    };
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return { ...token, error: 'RefreshAccessTokenError' };
  }
}

export default authOptions;