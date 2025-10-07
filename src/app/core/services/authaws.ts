import { Injectable } from '@angular/core';
import { signUp, confirmSignUp, signIn, signOut, getCurrentUser } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthAWS {
  constructor() { }

  async handleSignUp(username: string, email: string, password: string) {
    try {
      const user = await signUp({
        username,
        password,
        options: { userAttributes: { email } }
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async handleConfirmSignUp(username: string, code: string) {
    try {
      return await confirmSignUp({ username, confirmationCode: code });
    } catch (error) {
      throw error;
    }
  }

  async handleLogin(username: string, password: string) {
    try {
      return await signIn({ username, password });
    } catch (error) {
      throw error;
    }
  }

  async handleLogout() {
    try {
      await signOut();
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await getCurrentUser();
    } catch (error) {
      return null;
    }
  }
}
