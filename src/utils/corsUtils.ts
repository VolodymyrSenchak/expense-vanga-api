const allowedOrigins = [
  "http://localhost:4200",
  "https://expense-vanga-app.vercel.app"
];



export const getCorsOptions = () => ({
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS")); // Block the request
    }
  },
});
