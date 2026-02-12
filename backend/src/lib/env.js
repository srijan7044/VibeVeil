import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
  CLIENT_URL: process.env.CLIENT_URL,
};


// PORT=3000
// MONGODB_URI=mongodb+srv://offsray7044_db_user:8Ps8Ns9QygozIgdg@cluster0.xe5bt4r.mongodb.net/VibeVeil_db?appName=Cluster0
// NODE_ENV=production
// JWT_SECRET=your_jwt_secret_key

// RESEND_API_KEY=re_ZxwmGvxG_EKuJ3g5jqhvTSPmQdfiGmu7D

// EMAIL_FROM="onboarding@resend.dev"
// EMAIL_FROM_NAME="VibeVeil Team"

// CLIENT_URL=http://localhost:5173A