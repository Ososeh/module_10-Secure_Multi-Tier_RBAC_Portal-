import axios from 'axios';
const axiosClient=axios.create({baseURL:import.meta.env.VITE_API_BASE_URL||'/api',headers:{'Content-Type':'application/json'}});
axiosClient.interceptors.request.use((config)=>{const token=localStorage.getItem('auth_token');if(token)config.headers.Authorization=`Bearer ${token}`;console.log('[axios] Request prepared',config.method,config.url);return config;},(error)=>Promise.reject(error));
axiosClient.interceptors.response.use((response)=>response,(error)=>{const original=error.config||{};if(error.response?.status===401&&!original._retry&&!String(original.url).includes('/auth/login')){localStorage.removeItem('auth_token');window.location.href='/login?expired=true';}return Promise.reject(error);});
export default axiosClient;
