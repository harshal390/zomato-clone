export interface authContextType {
  authType: string;
  otpVerificationProcess: boolean;
  counter: number;
  changeAuthType: (str: string) => void;
}
