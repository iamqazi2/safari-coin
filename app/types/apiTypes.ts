export interface RegisterFormData {
  fullName: string;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterRequestBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface VerifyOTPRequestBody {
  email: string;
  otp: string;
  type: string;
}

export interface ResendOTPRequestBody {
  email: string;
}
