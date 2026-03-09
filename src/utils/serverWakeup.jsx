// const BACKEND_URL = 'https://ambimood-backend-2.onrender.com';
const BACKEND_URL = 'https://ambimood-backend-production.up.railway.app';
export const wakeUpServer = async () => {
  try {
    await fetch(`${BACKEND_URL}/api/health`);
  } catch (e) {}
};

export const keepServerWarm = () => {
  wakeUpServer();
  setInterval(wakeUpServer, 4 * 60 * 1000);
};