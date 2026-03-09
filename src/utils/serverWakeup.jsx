const BACKEND_URL = 'https://ambimood-backend-2.onrender.com';

export const wakeUpServer = async () => {
  try {
    await fetch(`${BACKEND_URL}/api/health`);
  } catch (e) {}
};

export const keepServerWarm = () => {
  wakeUpServer();
  setInterval(wakeUpServer, 4 * 60 * 1000);
};